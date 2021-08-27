import ExpressionDetailTable from "./Components/ExpressionDetailTable";
import BoundaryTable from "./Components/BoundaryTable/BoundaryTable";
import React, {useEffect} from "react";
import {useDataQuery} from "@dhis2/app-runtime";
import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";
import {analyticsTypes} from "../../../../Utils/Models";
import {lowerCaseAllWordsExceptFirstLetters} from "../../../../Utils/Functions/FormulaFunctions";


const query =  {
    calculation:{
        resource:"programIndicators",
        id: ({id})=>id,
        params:{
            fields:["analyticsType","aggregationType","expression","filter","analyticsPeriodBoundaries[id,boundaryTarget,analyticsPeriodBoundaryType,offsetPeriods,offsetPeriodType]"]
        }
    }
}


export default function CalculationDetails({id}){


    const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})

    useEffect(()=>{refetch({id})},[id])


    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }



    const res=data?.calculation;

    return <div>
        <h3>Calculation details</h3>
        <p>Calculation of the values will be {res?.aggregationType} of {res?.analyticsType} across orgunit and period.
        </p>
        <p>
            Program indicator calculation will be based on Analytics Type, for distinction purposes:

        </p>

        <ul>
            {
                res?.analyticsType===analyticsTypes.EVENT ?
                <li>
                Events implies, each event from data source is considered as independent row to be counted, and properties and details of the event are used to filter events.

                 </li>:
                res?.analyticsType===analyticsTypes.ENROLLMENT ?
                <li>
                    Enrollment implies, each enrollment from data source is considered as independent row to be counted, and events from any stage and other properties and details of enrollment are used to filter enrollments.

                </li>:
                    ""
            }

        </ul>
        <div>
            <p>
                Below are expression details on computing program indicator and it’s related data source
            </p>

        </div>
        <div>
            <ExpressionDetailTable expression={res?.expression} filter={res?.filter} />
        </div>

        <div>
            <p>
            Below are period boundaries that determines which {lowerCaseAllWordsExceptFirstLetters(res?.analyticsType)} will be included in calculations of the program indicators, where for
                {
                    res?.analyticsType===analyticsTypes.EVENT ?
                        " event date will be used.":
                    res?.analyticsType===analyticsTypes.ENROLLMENT ?
                       " enrollment analytics will be used.":
                        ""
                }
            </p>
        </div>
        <div>

            <BoundaryTable rows={res?.analyticsPeriodBoundaries} />
        </div>


    </div>

}