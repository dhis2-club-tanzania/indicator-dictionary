import { useParams,useHistory } from 'react-router-dom'

import Introduction from '../components/introduction'

function IndicatiorPage(){
    const { id } = useParams()
   
    return (<div>
       <Introduction idIndic={id} /> 

       </div>)

}


export default IndicatiorPage;