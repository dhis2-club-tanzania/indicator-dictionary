import React from "react";

import i18n from "@dhis2/d2-i18n";


import {
    DataTable,
    DataTableToolbar,
    DataTableHead,
    TableHead,
    DataTableBody,
    TableBody,
    DataTableCell,
    DataTableRow,
    DataTableColumnHeader,
} from '@dhis2/ui'


export default function Rules({selected}){


    return <div>
        <h3>Function Rules</h3>
        <p>  The following are available rules used for data analytics</p>

        <DataTable>
            <TableHead>
                <DataTableRow>
                    <DataTableColumnHeader bordered>
                        {i18n.t("Id")}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader bordered>
                        {i18n.t("Name")}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        {i18n.t("Description")}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        {i18n.t("Default Rule")}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        {i18n.t("JSON")}
                    </DataTableColumnHeader>


                </DataTableRow>
            </TableHead>
            <TableBody>
                <DataTableRow >
                    <DataTableCell bordered>

                    </DataTableCell  >
                    <DataTableCell bordered>

                    </DataTableCell  >
                    <DataTableCell bordered>

                    </DataTableCell  >
                    <DataTableCell bordered>

                    </DataTableCell  >
                    <DataTableCell bordered>

                    </DataTableCell  >


                </DataTableRow>
            </TableBody>

        </DataTable>


    </div>
}