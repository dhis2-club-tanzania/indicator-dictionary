import React from "react";
import {useDataEngine} from "@dhis2/app-runtime";
import {useGetNumDenMatch} from "../../../../../../Utils/Hooks";
import Loader from "../../../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../../../Shared/Componets/Error/ErrorAPIResult";


export default function IndicatorCount({dataElements}){

    const engine=useDataEngine()


    const onlyIds=dataElements.map((e)=>{
        return e?.id
    })

    const {loading, error, data}=useGetNumDenMatch(onlyIds,engine)

    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }

    let count=0
    data.matches?.map((e)=>{
       count+= e.numeratorMatch?.indicators?.length+e?.denominatorMatch?.indicators?.length
    })


    return <>It’s data elements belongs to {count} indicators using it as numerator/denominator</>

}
