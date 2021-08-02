import { useParams,useHistory } from 'react-router-dom'
import CalculationDetails from '../components/calculationDetails'
import CompletenessDataSources from '../components/completenessDataSources'
import DataElementSIndicator from '../components/dataElementsIndicator'
import DatasetsReportingRates from '../components/datasetsReportingRates'

import IndicatorFacts from '../components/indicatorFacts/indicatorFacts'
import Introduction from '../components/introduction/introduction'
import LegendsAnalysis from '../components/legendsAnalysis/legendsAnalysis'
import ProgramIndicatorIndicator from '../components/programIndicatorIndicator'


function IndicatiorPage(){

    const { id } = useParams()
   
    return (<div>
       <Introduction id={id} />
       <p></p> 
       <IndicatorFacts id={id} /> 
       <p></p> 
       <LegendsAnalysis id={id} />
       <p></p> 
       <CalculationDetails id={id} />
       <p></p>
       <DataElementSIndicator />
       <p></p>
       <ProgramIndicatorIndicator    />
        <p></p>
        <DatasetsReportingRates />
        <p></p>
        
        <CompletenessDataSources />
        <p></p>

        <p></p>

       </div>)



}


export default IndicatiorPage;