import { TableHead, TableBody,  DataTable,    DataTableRow,    DataTableCell,    DataTableColumnHeader,} from '@dhis2/ui'
import PropTypes from "prop-types";
import {useDataQuery} from "@dhis2/app-runtime";
import {useEffect} from 'react'
import { CircularLoader } from '@dhis2/ui'
import {displayAccessPermisssion} from "../../../../Utils/Functions/DataElementDictionaryFunctions";

const query={
    sources:{
        resource:"dataElements",
        id: ({id})=>id,
        params:{
            fields:["created","user[displayName]","lastUpdated","lastUpdatedBy[displayName]","userGroupAccesses[id,displayName,access]","userAccesses[id,displayName,access]"
            ]
        }
    },
}

export default function AccesibilityAndSharing({id}){

    const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})


    useEffect(()=>{refetch({id})},[id])

    const result=data?.sources


    return(<div>
        <h3>Accesibility & Sharing Settings</h3>
        <p>
            This data element was first created on <i> {new Date(result?.created).toLocaleString("en-GB")}</i>  by <b>{result?.user?.displayName} </b> and last updated on <i>{new Date(result?.lastUpdated).toLocaleString("en-GB")}</i> by <b>{result?.lastUpdatedBy?.displayName}</b> .

        </p>
        <p>
            Data element will be visible for users with the following access:

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