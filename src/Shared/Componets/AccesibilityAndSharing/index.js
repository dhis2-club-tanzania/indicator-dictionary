import { TableHead, TableBody,  DataTable,    DataTableRow,    DataTableCell,    DataTableColumnHeader,} from '@dhis2/ui'
import PropTypes from "prop-types";
import {useDataQuery} from "@dhis2/app-runtime";
import React, {useEffect} from 'react'
import { CircularLoader } from '@dhis2/ui'
import {displayAccessPermisssion} from "../../../Utils/Functions/DataElementDictionaryFunctions";
import Loader from "../Loaders/Loader";
import Error from "../Error/ErrorAPIResult";


const query={
    sources: {
        resource: "",
        id: ({id})=>id,
        params: {
            fields: ["created", "user[displayName]", "lastUpdated", "lastUpdatedBy[displayName]", "userGroupAccesses[id,displayName,access]", "userAccesses[id,displayName,access]"
            ]
        }
    },
}

function displayDataType(resourceType){
    if(resourceType==="dataElements"){
        return " Data Element "
    }else{
        if(resourceType==="indicators"){
            return " Indicator "
        }
    }
}

function accessAndSharingQuery(resourceType) {
    query.sources.resource=resourceType
}

export default function AccesibilityAndSharing(props){
    const id=props.id
    const resourceType=props.resourceType


    useEffect(()=>{
        accessAndSharingQuery(resourceType)
        refetch({id})},[id])

    const {loading, error, data,refetch}  = useDataQuery(query,{variables:{id}})


    const result=data?.sources


        if(loading){
            return  <Loader text={""} />
        }if(error){
            return <Error error={error} />
        }


    return(<div>
        <h3>Accesibility & Sharing Settings</h3>
        <p>
            This
            { displayDataType(resourceType) } was first created on <i> {new Date(result?.created).toLocaleString("en-GB")}</i>  by <b>{result?.user?.displayName} </b> and last updated on <i>{new Date(result?.lastUpdated).toLocaleString("en-GB")}</i> by <b>{result?.lastUpdatedBy?.displayName}</b> .

        </p>
        <p>
            { displayDataType(resourceType) } will be visible for users with the following access:

        </p>
        <DataTable>
            <TableHead>
                <DataTableRow>

                    <DataTableColumnHeader>

                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        Details
                    </DataTableColumnHeader>


                </DataTableRow>
            </TableHead>
            <TableBody>
                <DataTableRow >

                    <DataTableCell bordered tag="th" >
                        User Access
                    </DataTableCell>
                    <DataTableCell bordered>
                        {result?.userAccesses?.length===0? "No access granted":""}
                        <ul>

                            {result?.userAccesses.map((dt)=>{

                                return <li key={dt.id}>{dt?.displayName} can <i>{displayAccessPermisssion(dt.access)} {JSON.stringify(dt.access)} </i> </li>
                            })}
                        </ul>

                    </DataTableCell>

                </DataTableRow>
                <DataTableRow >

                    <DataTableCell bordered tag="th" >
                        User Group Access
                    </DataTableCell>
                    <DataTableCell bordered>
                        {result?.userGroupAccesses?.length===0? "No access granted":""}
                        <ul>
                            {result?.userGroupAccesses.map((dt)=>{
                                return <li key={dt.id}>{dt?.displayName} can <i>{displayAccessPermisssion(dt.access)}</i> </li>
                            })}
                        </ul>
                    </DataTableCell>

                </DataTableRow>

            </TableBody>
        </DataTable>
    </div>)
}