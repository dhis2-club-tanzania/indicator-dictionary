
import PropTypes from "prop-types";
import {useDataQuery} from "@dhis2/app-runtime";
import React, {useEffect} from 'react'
import { CircularLoader } from '@dhis2/ui'
import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";
import IdentifiedBy from "../../../../Shared/Componets/IdentifiedBy/Index";

const query = {
    programIndicators:{
        resource:"programIndicators",
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



    let res=data?.programIndicators


    return ( <div>

        <h3>Introduction</h3>

            <p>

                {res?.displayName} is a {res?.aggregationType} indicator, described as {res?.displayDescription}. It’s labelled in short as {res?.displayShortName} and has a code of {res?.code}. In analytics it displays up to {res?.decimals} decimals. {res?.displayInForm?"It is also set to display in form":"It is not set to display in form"}


            </p>
            <IdentifiedBy href={res?.href} id={res?.id} />

    </div>
    )

}


//
// Introduction.PropTypes={
//     id:PropTypes.string.isRequired
// }