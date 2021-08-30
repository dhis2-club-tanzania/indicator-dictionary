import { useParams,useHistory } from 'react-router-dom'

import LegendsAnalysis from './Components/legendsAnalysis/legendsAnalysis'

import {    dataElementsStateDictionary,    dataSetReportingRatesStateDictionary,    programIndicatorStateDictionary} from "../../Store";
import AccesibilityAndSharing from "../../Shared/Componets/AccesibilityAndSharing";
import {useEffect} from "react";
import PropTypes from "prop-types";

import DataSource from "./Components/DataSource/dataSource";
import ProgramIndicatorIndicator from "./Components/ProgramIndicator";
import CalculationDetails from "./Components/calculationDetails/Index";
import DatasetsReportingRates from "./Components/DataSetReportingRate";
import DataElementSIndicator from "./Components/dataElementsInIndicator/dataElementsIndicator";
import IndicatorFacts from "./Components/indicatorFacts/indicatorFacts";
import Introduction from "./Components/introduction/introduction";
import {useRecoilCallback} from "recoil";



export default function IndicatorPage({id}){


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

    return (<div style={{display:"flex",flexDirection:"column"}}>
       <Introduction id={id} />

       <DataSource id={id} />

       <IndicatorFacts id={id} />

       <LegendsAnalysis id={id} />

       <CalculationDetails id={id} />

       <DataElementSIndicator />

       <ProgramIndicatorIndicator   />

        <DatasetsReportingRates />

        {/*<CompletenessDataSources />*/}

        <AccesibilityAndSharing id={id} resourceType={"indicators"} />


    </div>)
}



IndicatorPage.propTypes = {
    id: PropTypes.string.isRequired
};

