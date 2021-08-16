import { CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'
import Legend from './legend'

const query =    {
  legendAnalysis:{
    resource:"indicators",
    // "id": "ulgL07PF8rq",
    id: ({id})=>id,
      params:{
        fields:["id","displayName","legendSets[id,displayName,legends[id,displayName,startValue,endValue,color]]"]
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
   
     if(data.legendAnalysis.legendSets.length===0){
       return <><p>No legends</p></> //no legends sets
     }

     const legendSet=data.legendAnalysis.legendSets

     return (
       <div>
          <h3>Legends for analysis</h3>
          <p>
              Uses {legendSet.length} legends for for analysis, spread accross multiple cut-off points of interest, existing legends are:
          </p>
          <ul>
            {legendSet.map((legendSet)=>{
              return <Legend key={legendSet.id} legendSet={legendSet} />
            })}
          </ul>
         
      </div>
     )
}

export default LegendsAnalysis;