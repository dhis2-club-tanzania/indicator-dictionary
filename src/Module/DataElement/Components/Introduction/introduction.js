
import PropTypes from "prop-types";
import {useDataQuery} from "@dhis2/app-runtime";
import React, {useEffect} from 'react'
import { CircularLoader } from '@dhis2/ui'
import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";

const query = {
    dataElements:{
        resource:"dataElements",
        id: ({id})=>id,
        params:{
            fields:["id","displayName","description","shortName","code",
                "displayFormName","href"
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



    let res=data?.dataElements


    return ( <div>

        <h3>Introduction</h3>

            <p>
               <b>{res?.displayName}</b>  can be described as {res?.description}.
                <br/>
                It’s labelled in short as {res?.shortName} and has a code of {res?.code}. In data entry form, it’s named “{res?.displayFormName}”
                <br/>
                Identified by: <i> <a style={{textDecoration:"none"}} href={res?.href +".json"} target={"_blank"} >{res?.id}</a> </i>
            </p>

    </div>
    )

}



Introduction.prototype={
    id:PropTypes.string.isRequired
}