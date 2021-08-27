import { TableHead, TableBody,  DataTable,    DataTableRow,    DataTableCell,    DataTableColumnHeader,} from '@dhis2/ui'
import PropTypes from "prop-types";
import {useDataQuery} from "@dhis2/app-runtime";
import React, {useEffect} from 'react'
import { CircularLoader } from '@dhis2/ui'
import DisplayFormula from "./Componets/DisplayFormula";
import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";

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

    if(result?.length===0){
        return (
            <div>
                <h3>Related Indicators</h3>
                <p>This Data Element is not related to any indicator</p>
            </div>
        )
    }


    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }


    return(

        <div>
            <h3>Related Indicators</h3>
            <p>
                Below are set of indicators using program indicator as numerator or denominator in their calculations.
            </p>
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

                                    <div style={{margin:5}}>
                                        <DisplayFormula formula={result?.numerator} />
                                    </div>

                                </DataTableCell>
                                <DataTableCell bordered b>
                                    <div style={{margin:5}}>
                                        <DisplayFormula formula={result?.denominator} />
                                    </div>


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