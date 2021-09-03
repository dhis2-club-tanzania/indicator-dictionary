import React, {useEffect} from 'react'
import {useDataQuery} from "@dhis2/app-runtime";
import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";
import {
    dataSetDataElementCountState,
    indicatorGroupDataSetCount, indicatorGroupProgramCount,
    programDataElementCountState
} from "../../../../Store";
import {useRecoilValue} from "recoil";
import IndicatorCount from "./Components/IndicatorCount";

const query = {
    sources:{
        resource:"indicatorGroups",
        id: ({id})=>id,
        params:{
            fields:["indicators"]
        }
    },

}


export default function Facts({id}){

    const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})

    const dataSetCount=useRecoilValue(indicatorGroupDataSetCount)
    const programCount=useRecoilValue(indicatorGroupProgramCount)

    useEffect(()=>{refetch({id})},[id])

    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }


    return <div>
        <h3>Indicator group Facts
        </h3>

        <ul>
            <li> It has {data?.sources?.indicators?.length} indicators     </li>
            <li>It’s data elements belongs to {dataSetCount} datasets and {programCount} program sources of data</li>
            {/*<li> {}*/}
            {/*    <IndicatorCount dataElements={data?.sources?.dataElements}/> </li>*/}
        </ul>
    </div>
}