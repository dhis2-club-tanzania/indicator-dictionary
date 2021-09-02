import {useDataQuery} from "@dhis2/app-runtime";
import {useEffect} from "react";
import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";
import React from 'react'
import _ from 'lodash'
import {dataElementDomainTypes, dataTypesInitials} from "../../../../Utils/Models";
import DataSets from "./DataSets";
import Programs from "./Programs";
import i18n from '@dhis2/d2-i18n'
import {getFormulaSources} from "../../../../Utils/Functions/FormulaFunctions";


const query = {
    sources:{
        resource:"indicatorGroups",
        id: ({id})=>id,
        params:{
            fields:["indicators[id,displayName,numerator,denominator]"]
        }
    }
}


export default function DataSources({id}){

    const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})

    useEffect(()=>{refetch({id})},[id])


    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }


    //for each indicator, put dataElements from both numerator and den in one array them pass in it
    const sourcesDataElement=data?.sources?.indicators?.map((e)=>{
        return _.concat([],getFormulaSources(e?.numerator,dataTypesInitials.DATA_ELEMENT),getFormulaSources(e?.denominator,dataTypesInitials.DATA_ELEMENT) )
    })

    const sourceProgram=data?.sources?.indicators?.map((e)=>{
        let ind= _.concat([],getFormulaSources(e?.numerator,dataTypesInitials.PROGRAM_INDICATOR),getFormulaSources(e?.denominator,dataTypesInitials.PROGRAM_INDICATOR) )
        let attr= _.concat([],getFormulaSources(e?.numerator,dataTypesInitials.ATTRIBUTES),getFormulaSources(e?.denominator,dataTypesInitials.ATTRIBUTES) )
        let prgDtEl= _.concat([],getFormulaSources(e?.numerator,dataTypesInitials.PROGRAM_DATA_ELEMENT),getFormulaSources(e?.denominator,dataTypesInitials.PROGRAM_DATA_ELEMENT) )
        return {prgInd:ind,attr:attr,prgDtEl:prgDtEl}
        // let tmp="D{uy2gU8kT1jF.EzMxXuVww2z}+A{uy2gU8kT1jF.zDhUuAYrxNC}-I{dSBYyCUjCXd}"
        // let ind= _.concat([],getFormulaSources(tmp,dataTypesInitials.PROGRAM_INDICATOR),getFormulaSources(e?.denominator,dataTypesInitials.PROGRAM_INDICATOR) )
        // let attr= _.concat([],getFormulaSources(e?.numerator,dataTypesInitials.ATTRIBUTES),getFormulaSources(tmp,dataTypesInitials.ATTRIBUTES) )
        // let prgDtEl= _.concat([],getFormulaSources(tmp,dataTypesInitials.PROGRAM_DATA_ELEMENT),getFormulaSources(e?.denominator,dataTypesInitials.PROGRAM_DATA_ELEMENT) )
        // return {prgInd:ind,attr:attr,prgDtEl:prgDtEl}
    })

    // D{uy2gU8kT1jF.EzMxXuVww2z}+A{uy2gU8kT1jF.zDhUuAYrxNC}-I{dSBYyCUjCXd}

    return <div>
        <h3>{i18n.t("Data sources (Datasets/Programs)")} </h3>
        <p> {i18n.t("Indicators in this group are captured from the following sources")}    </p>

        <ul>
            {data?.sources?.indicators?.map((e,index)=>{
                return <li>{e?.displayName}

                    <DataSets aggregate={sourcesDataElement[index]} />
                    <Programs sources={sourceProgram[index]} />
                </li>
            })}
        </ul>



    </div>
}