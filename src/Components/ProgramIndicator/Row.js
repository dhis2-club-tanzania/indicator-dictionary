import {DataTableRow, DataTableCell,CircularLoader} from '@dhis2/ui'
import {useDataEngine, useDataQuery} from "@dhis2/app-runtime";
import {extractAllFormulaSource, getFormulaSources, getValueFromApi} from "../../utils/Functions/FormulaFunctions";
import {useEffect, useState} from "react";

const query={
   programIndicator:{
       resource:"programIndicators",
       id:({id})=>id,
       params:{
           fields:["id","displayName","aggregationType","analyticsType","analyticsPeriodBoundaries[id,analyticsPeriodBoundaryType,boundaryTarget]","filter","programIndicatorGroups[id,displayName]","legendSets[id,displayName]"]
       }
   }
}


export default function Row(props){

    //props
    const programIndicator=props.programInd
    const id=programIndicator.id


    //variables
    let wordDtEl=[]
    let attributes=[]
    let constants=[]


    const {loading, error, data}   = useDataQuery(query, {variables: {id}})

    // if(loading){
    //     return <CircularLoader />
    // }
    // if(error){
    //     return <i>Something went wrong</i>
    // }


    //hooks
    const engine = useDataEngine()
    const[dataElementsArray,setDataElementArray]=useState([])
    const[attributesArray,setAttributesArray]=useState([])
    const[constantsArray,setConstantsArray]=useState([])

    useEffect(()=>{

        if (data?.programIndicator?.filter){
            let tempArr=getFormulaSources((data?.programIndicator?.filter),"#{")
            if(tempArr.length){
                getWordData(tempArr,0),()=>{}
            }
        }

    },[data])

    useEffect(()=>{
        let tempArr=getFormulaSources((data?.programIndicator?.filter),"A{")

        if(tempArr.length){
            getWordData(tempArr,3),()=>{}
        }

    },[data])
    useEffect(()=>{
        let tempArr=getFormulaSources((data?.programIndicator?.filter),"C{")

        if(tempArr.length){
            getWordData(tempArr,4),()=>{}
        }

    },[data])

    async function getWordData(arr,type){ //arr for array of id of datas to get their values, type indicates the data type of data eg dataElement=0 program indicator=1, reporting rates=2
        let allPromises=[];
        let i=0
        for(i=0;i<arr.length;i++){
            //reverse the element since here, for dataElement it goes as programStage, then
            let proms=getValueFromApi(engine,arr[i])
            allPromises.push(proms)
        }
        i=0
        await Promise.all(allPromises).then(value => {
            if(type===0){
                value.map((val)=>{ //We always return array just for uniformity
                    if(val.length>1){ //array of two elements first element is dataElement second element of array is category option combo
                        wordDtEl.push({"id":arr[i],"val":val[0]+" "+val[1]})
                    }else{   //this is array of one element for data element that are just pure no category options
                        wordDtEl.push({"id":arr[i],"val":val[0]})
                    }
                    ++i;
                })
            }
            if(type===3){ //for Attribute
                value.map((val)=>{ //We always return array just for uniformity
                    attributes.push({"id":arr[i],"val":val[0]})
                    ++i;
                })
            }
            if(type===4){
                value.map((val)=>{ //We always return array just for uniformity
                    constants.push({"id":arr[i],"val":val[0]})
                    ++i;
                })
            }


            if(wordDtEl.length===arr.length){ //array is full so we reload to update UI
                // console.log(wordDtEl)
                setDataElementArray(wordDtEl)
            }
            if(attributes.length===arr.length){ //array is full so we reload to update UI
                setAttributesArray(attributes)
            }
            if(constants.length===arr.length){ //array is full so we reload to update UI
                setConstantsArray(constants)
            }

        })
    }

    function OtherCells(prog){
        return <>
            <DataTableCell bordered>
                {prog?.filter}
            </DataTableCell>
            <DataTableCell bordered>
                {prog?.aggregationType}
            </DataTableCell  >
            <DataTableCell bordered>
                {prog?.analyticsType}
            </DataTableCell>
            <DataTableCell bordered>
                <ol>
                    {prog?.analyticsPeriodBoundaries.map((boundary)=>{
                        return (<li key={boundary.id} >{boundary?.analyticsPeriodBoundaryType}</li>)
                    })}
                </ol>

            </DataTableCell>
            <DataTableCell bordered>
                <ol>
                    {prog?.legendSets.map((legend)=>{
                        return (<li key={legend.id}>{legend?.displayName}</li>)
                    })}
                </ol>
            </DataTableCell>
            <DataTableCell bordered>
                <ol>
                    {prog?.programIndicatorGroups.map((group)=>{
                        return (<li key={group.id}>{group?.displayName}</li>)
                    })}
                </ol>
            </DataTableCell>

        </>
    }


    console.log(dataElementsArray)
    console.log(attributesArray)
    console.log(constantsArray)

    return (
        <DataTableRow>
            <DataTableCell bordered>
                {programIndicator?.val}
            </DataTableCell  >
            <DataTableCell bordered>
                {programIndicator?.location}
            </DataTableCell>
            {OtherCells(data?.programIndicator)}
        </DataTableRow>
    )
}

