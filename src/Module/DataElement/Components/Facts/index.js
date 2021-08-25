import {useDataQuery} from "@dhis2/app-runtime";
import { useEffect} from 'react'
import {lowerCaseAllWordsExceptFirstLetters} from "../../../../Utils/Functions/FormulaFunctions";


const query = {
    sources:{
        resource:"dataElements",
        id: ({id})=>id,
        params:{
            fields:["valueType"]
        }
    },
    expressionMatch: {
        resource: 'validationRules',
        params: ({id}) => ({
            fields: [
                'id'
            ],
            filter:[`leftSide.expression:like:${id}`,`rightSide.expression:like:${id}`],
            rootJunction:"OR",
        })
    },
    numeratorMatch:{
        resource: 'indicators',
        params: ({id}) => ({
            fields: [
                'id'
            ],
            filter:[`numerator:like:${id}`]
        })
    },
    denominatorMatch:{
        resource: 'indicators',
        params: ({id}) => ({
            fields: [
                'id'
            ],
            filter:[`denominator:like:${id}`]
        })
    }
}




export default function Facts({id}){

    const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})


    useEffect(()=>{refetch({id})},[id])



    return (
        <div>
            <h3>Data element Facts</h3>
            <ul>
                <li> Accepts only {lowerCaseAllWordsExceptFirstLetters(data?.sources?.valueType)?.replace(/_/g," ")} to enforce validation</li>
                <li>Has {data?.expressionMatch?.validationRules?.length} related validation rules</li>
                <li> Part of numerators of {data?.numeratorMatch?.indicators?.length} indicators</li>
                <li>Part of denominators of {data?.denominatorMatch?.indicators?.length} indicators</li>


            </ul>
        </div>
    )
}