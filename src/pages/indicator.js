import { useParams,useHistory } from 'react-router-dom'


import { CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'
import IndicatorFacts from '../components/indicatorFacts'


function IndicatiorPage(){
    const { id } = useParams()
   
    return (<div>
       <Introduction idIndic={id} /> 

       </div>)



}


export default IndicatiorPage;