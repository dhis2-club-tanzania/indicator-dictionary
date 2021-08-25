
import {useDataQuery} from "@dhis2/app-runtime";
import {useEffect} from 'react'
import PropTypes from "prop-types";

const query = {
    sources:{
        resource:"dataElements",
        //   id: "Uvn6LCg7dVU",
        id: ({id})=>id,
        params:{
            fields:["id","displayName","dataSetElements[dataSet[id,displayName,periodType,timelyDays]]"]
        }
    }
}



export default  function DataSets({id}){


    const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})

    useEffect(()=>{refetch({id})},[id])


    // if(loading){
    //    return <CircularLoader />
    // }
    //
    // if(error){
    //    return <p> {error} </p>
    // }
    //

    return (<div>
        <h3>Data sources </h3>
        <p>
            Data element is captured from following sources

        </p>

        <h5>Datasets</h5>
        <ul>
            { data?.sources?.dataSetElements?.map((dt)=>{

              return( <li key={dt?.dataSet?.id}><b> {dt?.dataSet?.displayName}</b> submitting {dt?.dataSet?.periodType} after every {dt?.dataSet?.timelyDays} days </li>)

            })}
        </ul>


    </div>)

}



//
// DataSets.propTypes={
//     id:PropTypes.string.isRequired
// }