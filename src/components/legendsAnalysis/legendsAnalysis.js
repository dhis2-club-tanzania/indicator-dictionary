import { CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'
import Legend from './legend'

const query =    {
  legendSets:{
    resource:"indicators",
    id: ({id})=>id,
      params:{
        fields:["legendSets"]
      }
  } 
}

function LegendsAnalysis({id}){

      const {loading, error, data}   = useDataQuery(query, {variables: {id}})

      if(loading){
        return <CircularLoader />
     }
 
     if(error){
        return <p> {error} </p> 
     }  
   
     if(data.legendSets.legendSets.length===0){
       return <></> //no legends sets
     }

     const idLegendSet=data.legendSets.legendSets[0].id

     return (
       <div>
          <h3>Legends for analysis</h3>
          <p>  Uses 
            {/* "{{countOfLegend}}"  */}
            legends for for analysis, spread accross multiple cut-off points of interest, existing legends are:
          </p>

          <Legend />

          <Legend />
         
      </div>
     )
     


}



export default LegendsAnalysis;