
import {useDataQuery} from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";
import PropTypes from "prop-types";
import React,{useEffect} from 'react'
import Loader from "../../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../../Shared/Componets/Error/ErrorAPIResult";

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


    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }

    console.log(data?.sources?.dataSetElements?.dataSet)

    return (<div>
        <h4>{data?.sources?.displayName}</h4>
        <ul>
            { data?.sources?.dataSetElements?.map((dt)=>{
                return( <li key={dt?.dataSet?.id}><b> {dt?.dataSet?.displayName}</b> {i18n.t("submitting {{variables1}} after every {{variables2}} days ",{variables1:dt?.dataSet?.periodType,variables2:dt?.dataSet?.timelyDays})} </li>)
            })}
        </ul>


    </div>)

}


DataSets.propTypes={
    id:PropTypes.string.isRequired
}