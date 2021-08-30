import PropTypes from 'prop-types'
import React, {useEffect} from "react";
import {useRecoilCallback} from "recoil";
import AccessibilityAndSharing from "../../Shared/Componets/AccesibilityAndSharing";
import {
    dataElementsStateDictionary,
    dataSetReportingRatesStateDictionary,
    programIndicatorStateDictionary
} from "../../Store";
import CalculationDetails from './Components/calculationDetails/Index'
import DataElementSIndicator from '../../Shared/Componets/dataElementsInIndicator/dataElementsIndicator'
import DatasetsReportingRates from "./Components/DataSetReportingRate";
import DataSource from './Components/DataSource/dataSource'
import IndicatorFacts from './Components/indicatorFacts/indicatorFacts'
import Introduction from './Components/introduction/introduction'
import LegendsAnalysis from './Components/legendsAnalysis/legendsAnalysis'
import ProgramIndicatorIndicator from "./Components/ProgramIndicator";


export default function Index({id}) {


    return (<div style={{display: "flex", flexDirection: "column"}}>
        <Introduction id={id}/>

        <DataSource id={id}/>

        <IndicatorFacts id={id}/>

        <LegendsAnalysis id={id}/>

        <CalculationDetails id={id}/>

        <DataElementSIndicator resourceType={"Indicator"}/>

        <ProgramIndicatorIndicator/>

        <DatasetsReportingRates/>

        {/*<CompletenessDataSources />*/}
        <AccessibilityAndSharing id={id} resourceType={"indicators"} />

    </div>)
}

Index.propTypes = {
    id: PropTypes.string.isRequired
};



