import { TableHead, TableBody,  DataTable,    DataTableRow,    DataTableCell,    DataTableColumnHeader,} from '@dhis2/ui'


export default function RelatedIndicator(){


    return(
        <div>
            <DataTable>
                <TableHead>
                    <DataTableRow>

                        <DataTableColumnHeader>
                            Name
                        </DataTableColumnHeader>
                        <DataTableColumnHeader>
                            Numerator
                        </DataTableColumnHeader>
                        <DataTableColumnHeader>
                            Denominator
                        </DataTableColumnHeader>
                        <DataTableColumnHeader>
                            Type
                        </DataTableColumnHeader>
                        <DataTableColumnHeader>
                           Description
                        </DataTableColumnHeader>

                    </DataTableRow>
                </TableHead>
                <TableBody>
                    <DataTableRow>

                        <DataTableCell bordered >


                        </DataTableCell>
                        <DataTableCell bordered>


                        </DataTableCell>
                        <DataTableCell bordered>
                        </DataTableCell>
                        <DataTableCell bordered>
                        </DataTableCell>
                        <DataTableCell bordered>

                        </DataTableCell>

                    </DataTableRow>
                </TableBody>
            </DataTable>
        </div>
    )
}