import React, {useEffect} from 'react'
import {useDataQuery} from "@dhis2/app-runtime";
import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";

const query = {
    sources:{
        resource:"dataElements",
        id: ({id})=>id,
        params:{
            fields:["valueType"]
        }
    },
    expressionMatch: {
        resource: 'validationRules',
        params: ({id}) => ({
            fields: [
                'id'
            ],
            filter:[`leftSide.expression:like:${id}`,`rightSide.expression:like:${id}`],
            rootJunction:"OR",
        })
    },
    numeratorMatch:{
        resource: 'indicators',
        params: ({id}) => ({
            fields: [
                'id'
            ],
            filter:[`numerator:like:${id}`]
        })
    },
    denominatorMatch:{
        resource: 'indicators',
        params: ({id}) => ({
            fields: [
                'id'
            ],
            filter:[`denominator:like:${id}`]
        })
    }
}




export default function Facts(){


    const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})

    useEffect(()=>{refetch({id})},[id])

    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }


    return <div>
        <h3>Data element group Facts
        </h3>

        <ul>
            <li>It has {"{dataElement Count}"} data Elements     </li>
            <li>It’s data elements belongs to {"{dataSetCount}"} dataset and {"{programCount}"} program sources of data</li>
            <li>It’s data elements belongs to {"{indicatorCount}"} indicators using it as numerator/denominator</li>
        </ul>
    </div>
}