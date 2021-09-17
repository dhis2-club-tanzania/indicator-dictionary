import {dataSourceTypes, dataTypes} from "../../../../Utils/Models";

import DataElementPage from "../../../DataElement";
import {useRecoilCallback, useRecoilValue} from "recoil";
import {
    dataElementsStateDictionary, dataSetDataElementCountState,
    dataSetReportingRatesStateDictionary,
    dataSourceStateDictionary, programDataElementCountState, programIndicatorStateDictionary
} from "../../../../Store";
import ProgramIndicatorPage from "../../../ProgramIndicator";
import React, {useEffect} from 'react'
import IndicatorPage from "../../../Indicator/Index";
import DataElementGroupPage from "../../../DataElementGroup";
import IndicatorGroupPage from "../../../IndicatorGroup";
import classes from '../chipsSection.module.css'
import FunctionPage from "../../../Function";
import {
    indicatorGroupAggregateDataElements,
    indicatorGroupDataSets, indicatorGroupDenominatorDataElements, indicatorGroupNumeratorDataElements,
    indicatorGroupProgramDataElements,
    indicatorGroupPrograms
} from "../../../../Store/IndicatorGroup";


export default function DataSourceSelector(){

    const{id,type}=useRecoilValue(dataSourceStateDictionary);

    const reset = useRecoilCallback(({reset}) => () => {
        reset(dataElementsStateDictionary)
        reset(dataSetReportingRatesStateDictionary)
        reset(programIndicatorStateDictionary)
        reset(dataSetDataElementCountState)
        reset(programDataElementCountState)
        reset(indicatorGroupDataSets)
        reset(indicatorGroupPrograms)
        reset(indicatorGroupProgramDataElements)
        reset(indicatorGroupAggregateDataElements)
        reset(indicatorGroupNumeratorDataElements)
        reset(indicatorGroupDenominatorDataElements)

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


    }

    return <>

    </>


}