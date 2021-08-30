import {useDataEngine} from '@dhis2/app-runtime'
import React, {useEffect, useState} from "react";
import {
    getDetailedValueFromApi,
    getFinalWordFormula,
    getFormulaSources,
    getWordData
} from "../../../../Utils/Functions/FormulaFunctions";
import {dataTypes} from "../../../../Utils/Models";
import PropTypes from "prop-types";
import Loader from "../../Loaders/Loader";
import Error from "../../Error/ErrorAPIResult";
import useGetData from "../../../../Utils/Hooks";
import {useSetRecoilState} from "recoil";
import {programIndicatorStateDictionary} from "../../../../Store";

export default function DisplayFormula(props){
    //props
    const formula=props.formula
    const loc=props.location //either its in numerator or denominator

    //hooks
    const updateProgramIndicatorHandler= useSetRecoilState(programIndicatorStateDictionary)

    const engine = useDataEngine()
    const{loading,error,data}=useGetData(formula,engine,loc)

    updateProgramIndicatorHandler(data?.programIndicators)

    if(loading){
        return  <Loader text={""} />
    }
    if(error){
        return <Error error={error} />
    }

    return <div>
        {getFinalWordFormula(formula, data?.dataElements,data?.programIndicators,data?.dataSetReportingRates,data?.attributes,data?.constants)}
    </div>
}

DisplayFormula.PropTypes={
    formula:PropTypes.string.isRequired,

}