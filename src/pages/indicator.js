import { useParams,useHistory } from 'react-router-dom'



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
       </div>)



}


export default IndicatiorPage;