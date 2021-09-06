
import React from 'react'
import {useDataEngine} from "@dhis2/app-runtime";
import {useGetFunctionsDetails} from "../../../../Utils/Hooks/FunctionDictionary";
import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";
import FunctionPage from "../../../Function";
import TopSection from "./Component/TopSection";

export default function Functions({array}){

    const engine=useDataEngine()
    const{loading,error,data}=useGetFunctionsDetails(array,engine)

    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }


    return <div>
        <TopSection array={data?.functions} />
        <FunctionPage array={data?.functions}  />
    </div>
}