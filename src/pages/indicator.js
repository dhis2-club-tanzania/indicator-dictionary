import { useParams,useHistory } from 'react-router-dom'
import { CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'

function IndicatiorPage(){
    const { id } = useParams()
 
   
    const query = {
  
        indicatorsDetails:{
          resource:"indicators",
         id,
          params:{
            fields:["id","name","description","numeratorDescription","denominatorDescription",
            "indicatorType[displayName,id]"
            ]
          }
        }
      
      }

     
    const {loading, error, data}   = useDataQuery(query)

    

    if(loading){
        return <CircularLoader />
     }
 
 
     if(error){
        return <p> {error} </p> 
     }  
 
     const indicatorDetails=data.indicatorsDetails;
     console.log(indicatorDetails)  //having trouble getting indicator description
      
    return ( <div>
      
        <h3>{indicatorDetails.name} </h3>

        <h2>Introduction</h2>

        <p>
        <b>{indicatorDetails.name} </b> 
         is a 
         <b> {indicatorDetails.indicatorType.displayName} </b> 
          indicator, measured by 
        <b> {indicatorDetails.numeratorDescription} </b>
         to 
        <b> {indicatorDetails.denominatorDescription} </b>

Its described as {indicatorDetails.description}
        </p>

        <p>
             <span><i> Identified by: {indicatorDetails.id} </i></span>
        </p>
                
        
    </div>
    )
  
}


export default IndicatiorPage;