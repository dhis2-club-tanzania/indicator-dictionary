import { TableHead, TableBody,  DataTable,    DataTableRow,    DataTableCell,    DataTableColumnHeader,} from '@dhis2/ui'
import PropTypes from "prop-types";
import {useDataQuery} from "@dhis2/app-runtime";
import {useEffect} from 'react'
import { CircularLoader } from '@dhis2/ui'

const query={
    relatedInd:{
        resource: 'indicators',
        params: ({id}) => ({
            fields: [
                "id","displayName","indicatorType[id,displayName]","displayDescription","numerator","denominator"
            ],
            filter:[`numerator:like:${id}`,`denominator:like:${id}`],
            rootJunction:"OR",
        })
    }
}




export default function RelatedIndicator({id}){

    const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})

    const result=data?.relatedInd?.indicators
    useEffect(()=>{refetch({id})},[id])

    return(

        <div>
            <h3>Related Indicators</h3>
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
                    {result?.map((result)=>{
                        return (
                            <DataTableRow key={result?.id}>

                                <DataTableCell bordered >
                                    {result?.displayName}

                                </DataTableCell>
                                <DataTableCell bordered>
                                    {result?.numerator}

                                </DataTableCell>
                                <DataTableCell bordered>
                                    {result?.denominator}
                                </DataTableCell>
                                <DataTableCell bordered>
                                    {result?.indicatorType?.displayName}
                                </DataTableCell>
                                <DataTableCell bordered>
                                    {result?.displayDescription}
                                </DataTableCell>

                            </DataTableRow>
                        )
                    })}

                </TableBody>
            </DataTable>
        </div>
    )
}