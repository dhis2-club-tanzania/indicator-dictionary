import React, {useEffect} from 'react'
import {useDataQuery} from "@dhis2/app-runtime";
import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";
import {dataSetDataElementCountState, programDataElementCountState} from "../../../../Store";
import {useRecoilValue} from "recoil";
import IndicatorCount from "./Components/IndicatorCount";

const query = {
    sources:{
        resource:"dataElementGroups",
        id: ({id})=>id,
        params:{
            fields:["dataElements"]
        }
    },

}


export default function Facts({id}){

    const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})

    const dataSetCount=useRecoilValue(dataSetDataElementCountState)
    const programCount=useRecoilValue(programDataElementCountState)

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
            <li> It has {data?.sources?.dataElements?.length} data Elements     </li>
            <li>It’s data elements belongs to {dataSetCount} dataset and {programCount} program sources of data</li>
            <li> {}
                <IndicatorCount dataElements={data?.sources?.dataElements}/> </li>
        </ul>
    </div>
}