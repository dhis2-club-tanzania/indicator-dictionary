import React, {useEffect} from 'react'
import {useDataQuery} from "@dhis2/app-runtime";
import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";
import {

   indicatorGroupDataSets, indicatorGroupPrograms,

} from "../../../../Store";
import {useRecoilValue} from "recoil";
import _ from "lodash";

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

    let dataSets=useRecoilValue(indicatorGroupDataSets)
    let programs=useRecoilValue(indicatorGroupPrograms)

    useEffect(()=>{refetch({id})},[id])

    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }


    dataSets=_.uniqWith(dataSets,_.isEqual)
    programs=_.uniqWith(programs,_.isEqual)


    return <div>
        <h3>Indicator group Facts
        </h3>

        <ul>
            <li> It has {data?.sources?.indicators?.length} indicators     </li>
            <li>It’s data elements belongs to {dataSets?.length} datasets and {programs?.length} program sources of data</li>
            {/*<li> {}*/}
            {/*    <IndicatorCount dataElements={data?.sources?.dataElements}/> </li>*/}
        </ul>
    </div>
}