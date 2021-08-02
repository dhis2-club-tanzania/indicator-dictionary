import { CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'

import classes from './introduction.module.css'

function Introduction(props){

  function onClickIdentified(){
   
    window.open(process.env.REACT_APP_API_LINK+"/api/indicators/"+id+".json");

    // 8082/api/indicators/Uvn6LCg7dVU.json
  }


   const id=props.id

    const query = {
  
        indicatorsDetails:{
          resource:"indicators",
          id,
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
    //  console.log(indicatorDetails)  //having trouble getting indicator description
      
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
             <span ><i onClick={()=>onClickIdentified(indicatorDetails.id)}> Identified by: <span className={classes.identifylink}> {indicatorDetails.id} </span> </i></span>
        </p>
                
        
    </div>
    )


    
}


export default Introduction;

