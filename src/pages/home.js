import { Menu,MenuItem,CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'

import { useHistory } from "react-router-dom";

function HomePage(){

   const history = useHistory();

    const query = {
        indicators: {
            resource: 'indicators',
            params: {
                fields: 'id,displayName',
            }
        },
    }


    const {loading, error, data}   = useDataQuery(query)

    function navigateToIndicatorHandler(id){
        history.push("/indicator/"+id);
    }

    if(loading){
       return <CircularLoader />
    }


    if(error){
       return <p> {error} </p> 
    }

    return(<div>
     
       
        <p> <b>Select an Indicator for details </b></p>  
      
            <Menu>
       
            {data.indicators.indicators.map( (ind)=>{
                    return(
                   
                        <MenuItem key={ind.id} onClick={()=>navigateToIndicatorHandler(ind.id)} label={ind.displayName} />

                    )
                } )}
            </Menu>
       
       

    </div>)
}

export default HomePage;