import {useDataEngine} from "@dhis2/app-runtime";
import {useGetAllFunctionsId, useGetFunctionsDetails} from "../../../../../Utils/Hooks/FunctionDictionary";
import Loader from "../../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../../Shared/Componets/Error/ErrorAPIResult";
import React from "react";


export default function OneFunction({id}){

    const engine=useDataEngine()
    const{loading,error,data}=useGetFunctionsDetails(engine,[id]);

    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }


    let result=data[0]

    console.log(result)
    return <>{result?.name}</>
}