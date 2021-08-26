import PropTypes from "prop-types";
import {useDataQuery} from "@dhis2/app-runtime";
import {useEffect} from 'react'
import { CircularLoader } from '@dhis2/ui'
import {lowerCaseAllWordsExceptFirstLetters} from "../../../../Utils/Functions/FormulaFunctions";


const query = {
    detail:{
        resource:"dataElements",
        id: ({id})=>id,
        params:{
            fields:["id","displayName","domainType","aggregationType","zeroIsSignificant","categoryCombo[id,displayName,categories[id,displayName,categoryOptions[id,displayName]]]"
            ]
        }
    }
}

export default function AnalyticsDetails({id}){


    const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})

    useEffect(()=>{refetch({id})},[id])

    const result=data?.detail

    return(<div>
        <h3>Analytics Details</h3>
        <ul>
            <li>Uses <b>{result?.aggregationType==="NONE"?" No ": lowerCaseAllWordsExceptFirstLetters(result?.aggregationType)?.replace(/_/g," ") }</b> aggregation type through period and hierarchy</li>
            <li> {result?.domainType} data sources</li>
            <li>{result?.zeroIsSignificant?'It stores zero values':"It does not store zero values"}</li>
            <li>Category Combo is {result?.categoryCombo?.displayName} which has cross-tabulation between {result?.categoryCombo?.categories?.length} {result?.categoryCombo?.categories?.length===1?'category':'categories'} with following details
                <ul>
                    {result?.categoryCombo?.categories?.map((cat)=>{
                        return (
                            <li key={cat?.id}> {cat?.displayName}
                                {cat?.categoryOptions?.length>=0?
                                     ' which also has the following options'
                                    :''}
                                <ul>
                                    {cat?.categoryOptions?.map((opt)=>{
                                        return   <li key={opt.id}> {cat.displayName}</li>
                                    })}
                                </ul>
                            </li>
                            )
                    })}
                </ul>
            </li>


        </ul>

    </div>)
}