import {useDataEngine} from "@dhis2/app-runtime";
import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";
import React from "react";
import {useGetAllFunctionsId} from "../../../../Utils/Hooks/FunctionDictionary";
import OneFunction from "./Components/OneFunction";


export default function AllFunctions(){

    const engine=useDataEngine()
    const{loading,error,data}=useGetAllFunctionsId(engine);

    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }


    return <div>
        <ul>
            {data?.map((e)=>{
                return <li> <OneFunction id={e} /> </li>
            })}
        </ul>
    </div>
}