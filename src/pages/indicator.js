import { useParams,useHistory } from 'react-router-dom'



import IndicatorFacts from '../components/indicatorFacts'
import Introduction from '../components/introduction'


function IndicatiorPage(){
    const { id } = useParams()
   
    return (<div>
       <Introduction idIndic={id} />
       <p></p> 
       <IndicatorFacts id={id} /> 
       </div>)



}


export default IndicatiorPage;