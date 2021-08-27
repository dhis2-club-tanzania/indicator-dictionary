import {dataTypes} from "../../../../../Utils/Models";
import Loader from "../../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../../Shared/Componets/Error/ErrorAPIResult";
import React from "react";
import { TableHead, TableBody,  DataTable,    DataTableRow,    DataTableCell,    DataTableColumnHeader,} from '@dhis2/ui'



export default function ExpressionDetailTable(){
    return   <DataTable>
        <TableHead>
            <DataTableRow>
                <DataTableColumnHeader>

                </DataTableColumnHeader>
                <DataTableColumnHeader>
                    Expression
                </DataTableColumnHeader>
                <DataTableColumnHeader>
                    Filter
                </DataTableColumnHeader>

            </DataTableRow>
        </TableHead>
        <TableBody>
            <DataTableRow>
                <DataTableCell bordered tag="th">
                    Details
                </DataTableCell>
                <DataTableCell bordered >



                </DataTableCell>
                <DataTableCell bordered>


                </DataTableCell>


            </DataTableRow>
        </TableBody>
    </DataTable>
}