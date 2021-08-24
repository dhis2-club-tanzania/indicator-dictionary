import { TableHead, TableBody,  DataTable,    DataTableRow,    DataTableCell,    DataTableColumnHeader,} from '@dhis2/ui'
import {useDataQuery} from "@dhis2/app-runtime";

const query = {
    orgUnitLevels: {
        resource: 'organisationUnitLevels',
        params: ({levels}) => ({
            fields: [
                'id', 'displayName'
            ],
            filter: levels?.map(level => (`level:eq: ${level}`)) ?? []
        })
    }
}


export default function OtherDetailTable(props){


    const detail=props?.other

    const levels=detail?.aggregationLevels

    const {loading, error, data,refetch}  = useDataQuery(query, {variables: {levels}})


    console.log(data?.orgUnitLevels?.organisationUnitLevels)

    return (
        <DataTable>
            <TableHead>
                <DataTableRow>
                    <DataTableColumnHeader>

                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        Color
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        Icon
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        Option set
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        Option set for Comments
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        Legends
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        Aggregation Levels
                    </DataTableColumnHeader>
                </DataTableRow>
            </TableHead>
            <TableBody>
                <DataTableRow>
                    <DataTableCell bordered tag="th">
                        Details
                    </DataTableCell>
                    <DataTableCell bordered>
                        {detail?.style?.color}
                    </DataTableCell>
                    <DataTableCell bordered>
                        {detail?.style?.icon}
                    </DataTableCell>
                    <DataTableCell bordered>
                        {JSON.stringify(detail?.optionSetValue)}
                    </DataTableCell>
                    <DataTableCell bordered>
                        {detail?.commentOptionSet?.displayName}
                    </DataTableCell>
                    <DataTableCell bordered>
                        <ol>
                            {detail?.legendSets?.map((legend)=>{
                                return <li>{legend?.displayName}</li>
                            })}
                        </ol>

                    </DataTableCell>
                    <DataTableCell bordered>
                        <ol>
                            {data?.orgUnitLevels?.organisationUnitLevels.map((lev)=>{
                                console.log(lev)
                                return (
                                    <li>{lev.displayName}</li>
                                )
                            })}
                        </ol>


                    </DataTableCell>

                </DataTableRow>
            </TableBody>
        </DataTable>
    )
}