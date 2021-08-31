import {useDataQuery} from "@dhis2/app-runtime";
import React, {useEffect} from "react";
import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";
import IdentifiedBy from "../../../../Shared/Componets/IdentifiedBy/Index";


const query = {
    dataElementGroups:{
        resource:"dataElementGroups",
        id: ({id})=>id,
        params:{
            fields:["id","displayName","displayDescription","displayShortName","code","href"
            ]
        }
    }
}


export default function Introduction({id}){

    const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})

    useEffect(()=>{refetch({id})},[id])

    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }

    console.log(data)


    let res=data?.dataElementGroups

    return <div>
        <h3>Introduction</h3>
        <p>
            {res?.displayName} can be described as {res?.displayDescription}.
            It’s labelled in short as {res?.displayShortName} and has a code of {res?.code}.
        </p>

        <IdentifiedBy href={res?.href} id={res?.id} />

    </div>
}

