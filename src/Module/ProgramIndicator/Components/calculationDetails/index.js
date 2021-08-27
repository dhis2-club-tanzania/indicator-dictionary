import ExpressionDetailTable from "./Components/ExpressionDetailTable";
import BoundaryTable from "./Components/BoundaryTable";
import React from "react";


export default function CalculationDetails({id}){


    return <div>
        <h3>Calculation details</h3>
        <p>Calculation of the values will be {"{aggregationType}"} of {"{  eventsOrenrollments }"} across orgunit and period.
        </p>
        <p>
            Program indicator calculation will be based on {"{analyticsType}"}, for distinction purposes:
            <ul>
                <li>
                    Events implies, each event from data source is considered as independent row to be counted, and properties and details of the event are used to filter events.

                </li>
                <li>
                    Enrollment implies, each enrollment from data source is considered as independent row to be counted, and events from any stage and other properties and details of enrollment are used to filter enrollments.

                </li>
            </ul>
        </p>

        <div>
            <p>

                Below are expression details on computing program indicator and it’s related data source
            </p>

        </div>
        <div>
            <ExpressionDetailTable />
        </div>

        <div>
            <p>
            Below are period boundaries that determines which {"{ events / enrollments }"} will be included in calculations of the program indicators, where for {"{ event analytics, event date will be used / enrollment analytics, enrollment analytics will be used}"}.
            </p>
        </div>
        <div>

            <BoundaryTable />
        </div>


    </div>

}