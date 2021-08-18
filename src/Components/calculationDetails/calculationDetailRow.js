import {CircularLoader, DataTableCell,} from '@dhis2/ui'
import {useDataEngine, useDataQuery} from '@dhis2/app-runtime'
import {useEffect, useState} from "react";
import {useSetRecoilState} from "recoil";
import {
    dataElementsStateDictionary,
    dataSetReportingRatesStateDictionary,
    programIndicatorStateDictionary
} from "../../store";
import DisplaySource from "./DisplaySource";
import {getFormulaSources, getValueFromApi, setCharAt} from "../../utils/Functions/FormulaFunctions";




function CalculationDetailRow(props){

let testArr=[]
//structure of dataElemet in store is 
    // [
    //     {
    //         "id":"dfds3ds.fdaf",
    //         "val":"value from api",
    //         "exprPart":"num/den",
    //     }
    // ]

    //props
    const formula=props.formula
    const loc=props.location

    //variables
    let wordDtEl=[]
    let programInd=[]
    let dataSetReportingRates=[]

    //hooks
    const[dataElementsArray,setDataElementArray]=useState([])
    const[programIndicatorArray,setProgramIndicatorArray]=useState([])
    const[dataSetReportingRatesArray,setDataSetReportingRatesArray]=useState([])
    const engine = useDataEngine()
    const updateDataElementHandler= useSetRecoilState(dataElementsStateDictionary)
    const updateProgramIndicatorHandler= useSetRecoilState(programIndicatorStateDictionary)
    const updateDataSetReportingRatesHandler= useSetRecoilState(dataSetReportingRatesStateDictionary)


    useEffect(()=>{
        let tempArr=getFormulaSources(formula,"#{")

        if(tempArr.length){
            getWordData(tempArr,0),()=>{}
        }

        },[])
    useEffect(()=>{
        let tempArr=getFormulaSources(formula,"I{")
        if(tempArr.length){
            getWordData(tempArr,1),()=>{}
        }

        },[])
    useEffect(()=>{
        let tempArr=getFormulaSources(formula,"R{")
        if(tempArr.length){
            getWordData(tempArr,2),()=>{}
        }

    },[])


    //functions
    async function getWordData(arr,type){ //arr for array of id of datas to get their values, type indicates the data type of data eg dataElement=0 program indicator=1, reporting rates=2
        let allPromises=[];
        let i=0
        for(i=0;i<arr.length;i++){
            let proms=getValueFromApi(engine,arr[i],type)
            allPromises.push(proms)
        }
        i=0
       await Promise.all(allPromises).then(value => {
           if(type===0){
               value.map((val)=>{ //We always return array just for uniformity
                   if(val.length>1){ //array of two elements first element is dataElement second element of array is category option combo
                       wordDtEl.push({"id":arr[i],"val":val[0]+" "+val[1],"location":loc})
                   }else{   //this is array of one element for data element that are just pure no category options
                       wordDtEl.push({"id":arr[i],"val":val[0],"location":loc})
                   }
                   ++i;
               })
           }
           if(type===1){
               value.map((val)=>{ //We always return array just for uniformity
                   programInd.push({"id":arr[i],"val":val[0],"location":loc})
                   ++i;
               })
           }
           if(type===2){
               value.map((val)=>{ //We always return array just for uniformity
                   dataSetReportingRates.push({"id":arr[i],"val":val[0],"location":loc})
                   ++i;
               })
           }


           if(wordDtEl.length===arr.length){ //array is full so we reload to update UI
               setDataElementArray(wordDtEl)
               updateDataElementHandler( (prev)=>{
                   return  prev.concat(wordDtEl)
               } )
           }
            if(programInd.length===arr.length){
                setProgramIndicatorArray(programInd)
                updateProgramIndicatorHandler((prev)=>{
                    return  prev.concat(programInd)
                }  )
            }
            if(dataSetReportingRates.length===arr.length){
                setDataSetReportingRatesArray(dataSetReportingRates)
                updateDataSetReportingRatesHandler((prev)=>{
                    return prev.concat(dataSetReportingRates)
                })
            }
        })
    }

    function getFormulaInWordsFromFullSources(formula,arrOfSources) {

        for( let i=0;i<arrOfSources.length;i++){
            if(formula.search(arrOfSources[i].id)>=0){
                formula=formula.replace(arrOfSources[i].id,arrOfSources[i].val);   
            }  
        }
        return formula
    }


    function getFinalWordFormula(formula){

        let final=getFormulaInWordsFromFullSources(formula,dataElementsArray).replace(/#/g,"")
        final =getFormulaInWordsFromFullSources(final,programIndicatorArray)
        final =getFormulaInWordsFromFullSources(final,dataSetReportingRatesArray)
            while(final.search("I{")>=0) {//removes I
                let indexChar=final.search("I{")
                final = setCharAt(final, indexChar, "")
            }

        while(final.search("R{")>=0) {//removes R
            let indexChar=final.search("R{")
            final = setCharAt(final, indexChar, "")
        }
                return final
    }


    return      <>
                <DataTableCell  bordered>
                    {getFinalWordFormula(formula)}
                </DataTableCell>
                <DataTableCell  bordered>
                    {dataElementsArray.length>0? <DisplaySource title={"Data Elements"} data={dataElementsArray} /> :""}
                    {dataElementsArray.length>0?  <DisplaySource title={"Program Indicators"} data={programIndicatorArray} />:""}
                    {dataSetReportingRatesArray.length>0?  <DisplaySource title={"Data Sets"} data={dataSetReportingRatesArray} />:""}
                </DataTableCell>
             </>
}

export default CalculationDetailRow;