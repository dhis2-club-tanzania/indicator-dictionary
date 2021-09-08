import {dataSourceTypes, dataTypes} from "../../../../Utils/Models";

import DataElementPage from "../../../DataElement";
import {useRecoilCallback, useRecoilValue} from "recoil";
import {
    dataElementsStateDictionary,
    dataSetReportingRatesStateDictionary,
    dataSourceStateDictionary, programIndicatorStateDictionary
} from "../../../../Store";
import ProgramIndicatorPage from "../../../ProgramIndicator";
import React, {useEffect} from 'react'
import IndicatorPage from "../../../Indicator/Index";
import DataElementGroupPage from "../../../DataElementGroup";
import IndicatorGroupPage from "../../../IndicatorGroup";
import FunctionPage from "../../../Function";


export default function DataSourceSelector(props){

    const{id,type}=useRecoilValue(dataSourceStateDictionary);

    const reset = useRecoilCallback(({reset}) => () => {
        reset(dataElementsStateDictionary)
        reset(dataSetReportingRatesStateDictionary)
        reset(programIndicatorStateDictionary)
    })

    useEffect(() => {
        return () => {
            reset()
        };
    }, [id]);

    if(type!==dataTypes.UNDEFINED){
        if(type===dataSourceTypes.INDICATOR){
            return  <IndicatorPage id={id} />
        }
        if(type===dataSourceTypes.DATA_ELEMENT){
            return <DataElementPage id={id} />
        }
        if(type===dataSourceTypes.PROGRAM_INDICATOR){
            return <ProgramIndicatorPage id={id} />
        }
        if(type===dataSourceTypes.DATA_ELEMENT_GROUP){
            return <DataElementGroupPage id={id} />
        }
        if(type===dataSourceTypes.INDICATOR_GROUP){
            return <IndicatorGroupPage id={id} />
        }
        if(type===dataSourceTypes.FUNCTION){
            return <FunctionPage id={id} />
        }
    }

    return <></>


}