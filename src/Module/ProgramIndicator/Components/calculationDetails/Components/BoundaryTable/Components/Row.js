import React from "react";
import { TableHead, TableBody,  DataTable,    DataTableRow,    DataTableCell,    DataTableColumnHeader,} from '@dhis2/ui'


export default function Row(props){


    const target=props.target;
    const analyticsPeriodBoundaryType=props.analyticsPeriodBoundaryType
    const offsetPeriod=props.offsetPeriod
    const periodType=props.periodType

    return   <DataTableRow >

                <DataTableCell bordered >
                    {target}
                </DataTableCell>
                <DataTableCell bordered>
                    {analyticsPeriodBoundaryType}
                </DataTableCell>
                <DataTableCell bordered b>
                    {offsetPeriod}
                </DataTableCell>
                <DataTableCell bordered>
                    {periodType}
                </DataTableCell>

            </DataTableRow>

}