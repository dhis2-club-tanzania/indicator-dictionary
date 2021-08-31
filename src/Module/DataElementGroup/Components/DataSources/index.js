import {useDataQuery} from "@dhis2/app-runtime";
import {useEffect} from "react";
import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";
import React from 'react'

const query = {
    sources:{
        resource:"dataElementGroups",
        id: ({id})=>id,
        params:{
            fields:["dataElements[id,domainType]"]
        }
    }
}






export default function DataSources({id}){

    const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})

    useEffect(()=>{refetch({id})},[id])


    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }

    console.log(data)

//     var users = [
//         { 'user': 'barney', 'age': 36, 'active': true },
//         { 'user': 'fred',   'age': 40, 'active': false }
//     ];
//
//     _.filter(users, function(o) { return !o.active; });
// // => objects for ['fred']


    return <div>
        <h3> Data sources (Datasets/Programs)</h3>
        <p>
            Data elements in this group are captured from the following sources
        </p>


    </div>
}