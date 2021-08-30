import {useEffect,useState} from "react";
import {getFormulaSources, getWordData} from "../Functions/FormulaFunctions";
import {dataTypes} from "../Models";
import React from "react";


export default function useGetData(formula,engine,loc){
    const [loading,setLoading]=useState()
    const [error,setError]=useState()
    const [data,setData]=useState([])


    useEffect(()=>{
       let tempArr  =getFormulaSources(formula,"#{")
        let tempArr2=getFormulaSources(formula,"I{")
        let tempArr3=getFormulaSources(formula,"R{")

        if(tempArr.length){
            async function fetch(){
                tempArr=  await getWordData(engine,tempArr,dataTypes.DATA_ELEMENT,loc)
                tempArr2=await getWordData(engine,tempArr2,dataTypes.PROGRAM_INDICATOR,loc)
                tempArr3=await getWordData(engine,tempArr3,dataTypes.DATASET_REPORTING_RATES,loc)

            }
            setLoading(true)
            setError(false)
            fetch().then(() =>  {

                let result={dataElement:tempArr,programIndicator:tempArr2,dataSetReportingRates:tempArr3}
                setData((prevState => {return prevState.concat(result) }))

                // updateDataElementHandler( (prev)=>{
                //     return  prev.concat(wordDtEl)
                // } )

                setLoading(false)
            }).catch((error)=>{
                setLoading(false)
                setError(error)
            })
        }
    },[])




    return{
        loading,
        error,
        data
    }

}