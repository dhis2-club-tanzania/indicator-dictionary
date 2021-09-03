import React, {useEffect} from "react";
import i18n from "@dhis2/d2-i18n";
import RelatedIndicatorTable from "../../../../Shared/Componets/RelatedIndicatorTable";
import {useDataQuery} from "@dhis2/app-runtime";
import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";
import Row from "../../../../Shared/Componets/dataElementsInIndicator/row";
import {
    DataTable,
    DataTableToolbar,
    DataTableHead,
    TableHead,
    DataTableBody,
    TableBody,

    DataTableRow,
    DataTableColumnHeader,
} from '@dhis2/ui'
import {useRecoilValue} from "recoil";
import {
    indicatorGroupDenominatorDataElements,
    indicatorGroupNumeratorDataElements
} from "../../../../Store/IndicatorGroup";

const query = {
    sources:{
        resource:"dataElementGroups",
        id: ({id})=>id,
        params:{
            fields:["dataElements[id,displayName]"]
        }
    }
}


export default function RelatedDataElements(){


    // const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})
    //
    // useEffect(()=>{refetch({id})},[id])

    const numerators=useRecoilValue(indicatorGroupNumeratorDataElements);
    const denominator=useRecoilValue(indicatorGroupDenominatorDataElements)

    console.log(numerators)
    console.log(denominator)


    //
    //
    // if(loading){
    //     return  <Loader text={""} />
    // }if(error){
    //     return <Error error={error} />
    // }


    return <div>
        <h3>{i18n.t("Related Data elements")} </h3>
        <p>
            {i18n.t("The following is the summary of the data elements used in the group") }
        </p>

        {/*<ul>*/}
        {/*    {data?.sources?.dataElements?.map((e)=>{*/}
        {/*        return <li key={e?.id}>*/}
        {/*            <div>*/}
        {/*               <b> {e?.displayName} </b>*/}
        {/*                <RelatedIndicatorTable id={e?.id} />*/}
        {/*            </div>*/}

        {/*        </li>*/}
        {/*    })}*/}

        {/*</ul>*/}

        <DataTable>
            <TableHead>
                <DataTableRow>
                    <DataTableColumnHeader bordered>
                        {i18n.t("Data Element")}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader bordered>
                        {i18n.t("Expression part (Numerator/ Denominator)")}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        {i18n.t("Value Type")}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        {i18n.t("Zero Significance")}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        {i18n.t("Categories")}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        {i18n.t("Datasets/ Programs")}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        {i18n.t("Groups")}
                    </DataTableColumnHeader>

                </DataTableRow>
            </TableHead>
            <TableBody>
                {/*{dataElements?.map((dtEle,index) => {*/}
                {/*    return <Row key={index} datEl={dtEle} location={dtEle?.location}/>*/}
                {/*})}*/}
            </TableBody>

        </DataTable>

    </div>

}
