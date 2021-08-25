import PropTypes from "prop-types";
import {useDataQuery} from "@dhis2/app-runtime";
import {useEffect} from 'react'
import { CircularLoader } from '@dhis2/ui'


const query = {
    dataElements:{
        resource:"dataElements",
        id: ({id})=>id,
        params:{
            fields:["id","displayName","domainType","zeroIsSignificant","categoryCombo[id,displayName,categories[id,displayName,categoryOptions[id,displayName]]]"
            ]
        }
    }

}



export default function AnalyticsDetails(){


    const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})

    useEffect(()=>{refetch({id})},[id])

    console.log(data)

    return(<div>
        <h3>Analytics Details</h3>
        <ul>
            <li>{"{aggregationOperator}"} through period and hierarchy</li>
            <li> {"{domainType}"} data sources</li>
            <li>{"storeZeroDataValues"}</li>
            <li>{"categoryCombo"} cross-tabulation between {"categories"} with following details
                <ul>
                    <li> {"category1"} has {"options"}</li>
                    <li> {"category1"} has {"options"}</li>                </ul>
            </li>


        </ul>



    </div>)
}