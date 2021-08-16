
import { CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'

   
const query = {
    sources:{
      resource:"indicators",
        //   id: "Uvn6LCg7dVU",
          id: ({id})=>id,
        params:{
          fields:["id","displayName","dataSets[id,displayName,timelyDays,periodType]"]
        }
    } 
  }
  
  
    function DataSource({id}){


        const {loading, error, data}   = useDataQuery(query, {variables: {id}})

        if(loading){
          return <CircularLoader />
       }
      
       if(error){
          return <p> {error} </p> 
       }  
      
      
    //    console.log(data.sources)  
      

        return (<div>
           <h3>Data sources (Datasets/Programs)</h3> 
           <p>  
                Indicator is captured from the following sources  
                {/* issues of applicable routine dataSources */}
            </p>
            <h5>Datasets</h5>
               
            <ul>
            {data.sources.dataSets.map((dataSet)=>{
                return <li key={dataSet.id}><b>{dataSet.displayName}</b> submitting {dataSet.periodType} after every {dataSet.timelyDays}</li>
            })}
            </ul>
            
            <h5>Programs</h5>
        </div>)

    }

    export default DataSource;