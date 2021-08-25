import { TableHead, TableBody,  DataTable,    DataTableRow,    DataTableCell,    DataTableColumnHeader,} from '@dhis2/ui'
import PropTypes from "prop-types";
import {useDataQuery} from "@dhis2/app-runtime";
import {useEffect} from 'react'
import { CircularLoader } from '@dhis2/ui'

const query={
    sources:{
        resource:"dataElements",
        id: ({id})=>id,
        params:{
            fields:["created","user[id,displayName]","lastUpdated","lastUpdatedBy[displayName]","userGroupAccesses[id,displayName,access]","userAccesses[id,displayName,access]"
            ]
        }
    },
}

export default function AccesibilityAndSharing({id}){

    const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})


    useEffect(()=>{refetch({id})},[id])

    const result=data?.sources

    console.log(result)



    return(<div>
        <h3>Accesibility & Sharing Settings</h3>
        <p>
            This data element was first created on {"{dateCreated}"} by {"{userCreated}"} and last updated on {"{lastUpdated}"} by {"{userUpadted}"}.

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

                    </DataTableCell>

                </DataTableRow>
                <DataTableRow >

                    <DataTableCell bordered tag="th" >
                        User Group Access
                    </DataTableCell>
                    <DataTableCell bordered>

                    </DataTableCell>

                </DataTableRow>

            </TableBody>
        </DataTable>
    </div>)
}