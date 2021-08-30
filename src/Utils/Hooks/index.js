import {useEffect,useState} from "react";
import {getFormulaSources, getWordData} from "../Functions/FormulaFunctions";
import {dataTypes, dataTypesInitials} from "../Models";
import React from "react";


export default function useGetData(formula,engine,loc){
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(false)
    const [data,setData]=useState()

    useEffect(()=>{
       let tempArr =getFormulaSources(formula,dataTypesInitials.DATA_ELEMENT)
        let tempArr2=getFormulaSources(formula,dataTypesInitials.PROGRAM_INDICATOR)
        let tempArr3=getFormulaSources(formula,dataTypesInitials.DATASET_REPORTING_RATES)
        let tempArr4=getFormulaSources(formula,dataTypesInitials.ATTRIBUTES)
        let tempArr5=getFormulaSources(formula,dataTypesInitials.CONSTANTS)


        async function fetch(){
            tempArr= await getWordData(engine,tempArr,dataTypes.DATA_ELEMENT,loc)
            tempArr2=await getWordData(engine,tempArr2,dataTypes.PROGRAM_INDICATOR,loc)
            tempArr3=await getWordData(engine,tempArr3,dataTypes.DATASET_REPORTING_RATES,loc)
            tempArr4=await getWordData(engine,tempArr4,dataTypes.ATTRIBUTES,loc)
            tempArr5=await getWordData(engine,tempArr5,dataTypes.CONSTANTS,loc)

        }
        fetch().then(() =>  {
            let result={dataElements:tempArr,programIndicators:tempArr2,dataSetReportingRates:tempArr3,attributes:tempArr2,constants:tempArr5}
            setData(result)
            // setData((prevState => {return prevState.concat(result) }))
            setLoading(false)
        }).catch((error)=>{
            setLoading(false)
            setError(error)
        })
    },[])

    return{
        loading,
        error,
        data
    }

}