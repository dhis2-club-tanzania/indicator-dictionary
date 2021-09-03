import {useDataQuery} from "@dhis2/app-runtime";
import {   DataTableRow,    DataTableCell} from '@dhis2/ui'

import {isPureDataElement} from "../../../../../Utils/Functions/FormulaFunctions";
import Loader from "../../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../../Shared/Componets/Error/ErrorAPIResult";
import React from "react";

const query = {

    program:{
        resource: "identifiableObjects",
        id: ({id1})=>id1,
        params: {
            fields:["displayName"]
        }
    },
    dataElementInIndicator:{
        resource:"dataElements",
        id: ({id2})=>id2,
        params:{
            fields:["id","displayName","valueType","zeroIsSignificant","dataElementGroups[id,displayName]","categoryCombo[categories[id,displayName]]"]
        }

    },
}



export default function RowTracker({id,location}){

    let id1=id?.split(".")[0];
    let id2=id?.split(".")[1];

    const {loading, error, data} = useDataQuery(query, {variables: {id1,id2}})
    // const data= await engine.query(query2,{variables: {id,id2}})


    if(loading){
        return <Loader />
    }
    if(error){
        return <Error error={""} />
    }


    return <DataTableRow >
        <DataTableCell bordered>
            {data?.dataElementInIndicator?.displayName}
        </DataTableCell  >
        <DataTableCell bordered>
            {location}
        </DataTableCell>
        <DataTableCell bordered>
            {data?.dataElementInIndicator?.valueType}
        </DataTableCell>

        <DataTableCell bordered>

            {JSON.stringify(data?.dataElementInIndicator?.zeroIsSignificant)}
        </DataTableCell>
        <DataTableCell bordered>
            <ol>
                {data?.dataElementInIndicator?.categoryCombo?.categories.map((cat)=>{return <li key={cat?.id}>{cat?.displayName}</li>})}
            </ol>
        </DataTableCell>
        <DataTableCell bordered>
            {/*<ol>*/}
            {/*    { data?.dataSetElements?.map((dataSet)=>{return <li key={dataSet?.dataSet?.id}>{dataSet?.dataSet?.displayName}</li>})}*/}
            {/*</ol>*/}
            {data?.program?.displayName}
        </DataTableCell>
        <DataTableCell bordered>
            <ol>
                { data?.dataElementInIndicator?.dataElementGroups?.map((group)=>{return <li key={group?.id}>{group?.displayName}</li>})}
            </ol>
        </DataTableCell>
    </DataTableRow>
}



// RowAggregate.prototype={
//     datEl:PropTypes.
//
// }
