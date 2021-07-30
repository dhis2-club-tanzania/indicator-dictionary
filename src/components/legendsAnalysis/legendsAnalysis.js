import { CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'
import Legend from './legend'


function LegendsAnalysis(props){

    let id=props.id
     
    const query =    {
        legendSets:{
          resource:"indicators",
          id:"Tt5TAvdfdVK",
            params:{
              fields:["legendSets"]
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