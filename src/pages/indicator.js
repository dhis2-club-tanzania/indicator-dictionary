import { useParams,useHistory } from 'react-router-dom'
import CalculationDetails from '../components/calculationDetails'



import IndicatorFacts from '../components/indicatorFacts/indicatorFacts'
import Introduction from '../components/introduction'
import LegendsAnalysis from '../components/legendsAnalysis/legendsAnalysis'


function IndicatiorPage(){
    const { id } = useParams()
   
    return (<div>
       <Introduction idIndic={id} />
       <p></p> 
       <IndicatorFacts id={id} /> 
       <p></p> 
       <LegendsAnalysis id={id} />
       <p></p> 
       <CalculationDetails />

       </div>)



}


export default IndicatiorPage;