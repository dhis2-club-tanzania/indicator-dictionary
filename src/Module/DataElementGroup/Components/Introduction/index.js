import {useDataQuery} from "@dhis2/app-runtime";
import React, {useEffect} from "react";
import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";


const query = {
    dataElementGroups:{
        resource:"dataElementGroups",
        id: ({id})=>id,
        params:{
            fields:["id","displayName","displayDescription","aggregationType","displayShortName","code","decimals","displayInForm","href"
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


    let res=data?.programIndicators

    return <div>
        <h3>Introduction</h3>
        {/*{{dataElement group name}} can be described as {{data element group description}}.*/}
        {/*It’s labelled in short as {{shortName}} and has a code of {{code}}.*/}
        {/*Identified by: dataElementGroupUid*/}

    </div>
}

