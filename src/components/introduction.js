import { CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'

function Introduction(props){

   const indId=props.idIndic

    const query = {
  
        indicatorsDetails:{
          resource:"indicators",
          id:indId,
          params:{
            fields:["id","name","displayDescription","numeratorDescription","denominatorDescription",
            "indicatorType[displayName,id]",
            ],pagging:false,
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
      
        <h2>{indicatorDetails.name} </h2>

        <h3>Introduction</h3>

        <p>
        <b>{indicatorDetails.name} </b> 
         is a 
         <b> {indicatorDetails.indicatorType.displayName} </b> 
          indicator, measured by 
        <b> {indicatorDetails.numeratorDescription} </b>
         to  <b> {indicatorDetails.denominatorDescription} </b>
         </p>


        <p>

Its described as {indicatorDetails.displayDescription}
        </p>

        <p>
             <span><i> Identified by: {indicatorDetails.id} </i></span>
        </p>
                
        
    </div>
    )


    
}


export default Introduction;

