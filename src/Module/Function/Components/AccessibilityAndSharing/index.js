import {useDataQuery} from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";
import { TableHead, TableBody,  DataTable,    DataTableRow,    DataTableCell,    DataTableColumnHeader, CircularLoader } from '@dhis2/ui'
import PropTypes from "prop-types";
import React, {useEffect} from 'react'

import {displayAccessPermission} from "../../../../Utils/Functions/DataElementDictionaryFunctions";
import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";



const query={
    sources: {
        resource: "dataStore/functions",
        id: ({id})=>id+"/metaData",

    },
}



export default function AccessibilityAndSharing({id}){



    useEffect(()=>{

        refetch({id})},[id])

    const {loading, error, data,refetch}  = useDataQuery(query,{variables:{id}})


    const result=data?.sources


    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }


    return(<div>
        <h3>{i18n.t("Accesibility & Sharing Settings")}  </h3>
        <p>            {i18n.t("This Function was first created on")}   <i> {new Date(result?.created).toLocaleString("en-GB")}</i> {i18n.t("by")}   <b>{result?.user?.displayName} </b> {i18n.t("and last updated on")}   <i>{new Date(result?.lastUpdated).toLocaleString("en-GB")}</i> {i18n.t("by")}   <b>{result?.lastUpdatedBy?.displayName}</b> .

        </p>
        <p>
             {i18n.t("Function will be visible for users with the following access:")}

        </p>
        <DataTable>
            <TableHead>
                <DataTableRow>

                    <DataTableColumnHeader>

                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        {i18n.t("Details")}
                    </DataTableColumnHeader>


                </DataTableRow>
            </TableHead>
            <TableBody>
                <DataTableRow >

                    <DataTableCell bordered tag="th" >
                        {i18n.t("User Access")}
                    </DataTableCell>
                    <DataTableCell bordered>
                        {i18n.t(result?.userAccesses?.length===0?"No access granted":"")}
                        <ul>

                            {result?.userAccesses.map((dt)=>{

                                return <li key={dt.id}>{dt?.displayName}  {i18n.t("can")}  <i>{displayAccessPermission(dt.access)}  </i> </li>
                            })}
                        </ul>

                    </DataTableCell>

                </DataTableRow>
                <DataTableRow >

                    <DataTableCell bordered tag="th" >
                        {i18n.t("User Group Access")}
                    </DataTableCell>
                    <DataTableCell bordered>
                        {i18n.t(result?.userGroupAccesses?.length===0?"No access granted":"")}
                        <ul>
                            {result?.userGroupAccesses.map((dt)=>{
                                return <li key={dt.id}>{dt?.displayName} {i18n.t("can")}  <i>{displayAccessPermission(dt.access)}</i> </li>
                            })}
                        </ul>
                    </DataTableCell>

                </DataTableRow>

            </TableBody>
        </DataTable>
    </div>)
}

AccessibilityAndSharing.propTypes = {
    id: PropTypes.string.isRequired,

};
