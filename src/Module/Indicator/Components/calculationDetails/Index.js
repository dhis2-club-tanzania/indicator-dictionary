import {useDataQuery} from '@dhis2/app-runtime'
import i18n from "@dhis2/d2-i18n";
import {
    CircularLoader,
    DataTable,
    DataTableCell,
    DataTableColumnHeader,
    DataTableRow,
    TableBody,
    TableHead,
} from '@dhis2/ui'
import PropTypes from "prop-types";
import React, {useEffect} from 'react'
import CalculationDetailRow from './Components/Row'

const query = {
    calculation: {
        resource: "indicators",
        id: ({id}) => id,
        params: {
            fields: ["numerator", "denominator"]
        }
    }
}


export default function CalculationDetails({id}) {
    const {loading, error, data, refetch} = useDataQuery(query, {variables: {id}})

    useEffect(() => {
        refetch({id})
    }, [id])

    if (loading) {
        return <CircularLoader/>
    }

    if (error) {
        return <p> {error} </p>
    }

    const numDen = data.calculation


    return (<div>
        <h3> {i18n.t("Calculation details")}</h3>
        <p> {i18n.t("Below are expression computing numerator and denominator, and related sources")} </p>

        <DataTable>
            <TableHead>
                <DataTableRow>
                    <DataTableColumnHeader bordered>
                        {i18n.t("Expression")}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader bordered>
                        {i18n.t("Formula")}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader bordered>
                        {i18n.t("Sources")}

                    </DataTableColumnHeader>

                </DataTableRow>
            </TableHead>
            <TableBody>
                <DataTableRow>
                    <DataTableCell bordered>
                        {i18n.t("Numerator")}

                    </DataTableCell>
                    {/*<CalculationDetailRow formula={numDen.numerator} location="numerator"/>*/}
                    <CalculationDetailRow formula={"#{fbfJHSPpUQD.pq2XI5kz2BY}+#{fbfJHSPpUQD}+D{uy2gU8kT1jF.g9eOBujte1U}+A{ur1Edk5Oe2n.FO4sWYJ64LQ}+I{dSBYyCUjCXd}+C{Gfd3ppDfq8E}+R{V8MHeZHIrcP.REPORTING_RATE}"} location="numerator"/>


                </DataTableRow>
                <DataTableRow>
                    <DataTableCell bordered>
                        {i18n.t("Denominator")}

                    </DataTableCell>

                    {/*<CalculationDetailRow formula={numDen.denominator} location="denominator"/>*/}

                </DataTableRow>

            </TableBody>

        </DataTable>

    </div>)
}


CalculationDetails.propTypes = {
    id: PropTypes.string.isRequired
}
