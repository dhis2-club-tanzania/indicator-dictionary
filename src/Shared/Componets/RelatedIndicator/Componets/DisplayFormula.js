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

export default function DisplayFormula(props){
    //props
    const formula=props.formula
    const loc=props.location //either its in numerator or denominator

    //variables
    let wordDtEl=[]
    let programInd=[]
    let dataSetReportingRates=[]

    //hooks
    const[dataElementsArray,setDataElementArray]=useState([])
    const[programIndicatorArray,setProgramIndicatorArray]=useState([])
    const[dataSetReportingRatesArray,setDataSetReportingRatesArray]=useState([])
    // const [loading,setLoading]=useState()
    // const [error,setError]=useState()

    const engine = useDataEngine()


    const{  loading, error,data}=useGetData(formula,engine,loc)


    if(loading){
        return  <Loader text={""} />
    }
    if(error){
        return <Error error={error} />
    }

    console.log(data)
    // if(typeof dataWord!==dataTypes.UNDEFINED){
    //     setDataElementArray(dataWord)
    // }
    // if(typeof dataProInd!==dataTypes.UNDEFINED){
    //     setProgramIndicatorArray(dataProInd)
    // }
    // if(typeof dataRepRates!==dataTypes.UNDEFINED){
    //     setDataSetReportingRatesArray(dataRepRates)
    // }



    return <div>

        {getFinalWordFormula(formula,dataElementsArray,programIndicatorArray,dataSetReportingRatesArray,[],[])}

    </div>
}

DisplayFormula.prototype={
    formula:PropTypes.string.isRequired,

}