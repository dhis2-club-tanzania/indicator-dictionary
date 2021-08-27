import DisplayFormula from "../../../../../Shared/Componets/RelatedIndicator/Componets/DisplayFormula";
import React from "react";
import { TableHead, TableBody,  DataTable,    DataTableRow,    DataTableCell,    DataTableColumnHeader,} from '@dhis2/ui'


export default function BoundaryTable(){
    return   <DataTable>
        <TableHead>
            <DataTableRow>

                <DataTableColumnHeader>
                    Boundary target
                </DataTableColumnHeader>
                <DataTableColumnHeader>
                    Analytics period boundary type
                </DataTableColumnHeader>
                <DataTableColumnHeader>
                    Offset period by amount

                </DataTableColumnHeader>
                <DataTableColumnHeader>
                    Period type
                </DataTableColumnHeader>

            </DataTableRow>
        </TableHead>
        <TableBody>
            <DataTableRow >

                <DataTableCell bordered >


                </DataTableCell>
                <DataTableCell bordered>

                </DataTableCell>
                <DataTableCell bordered b>


                </DataTableCell>
                <DataTableCell bordered>

                </DataTableCell>


            </DataTableRow>
        </TableBody>
    </DataTable>
}