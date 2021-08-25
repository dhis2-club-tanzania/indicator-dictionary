

export default function AnalyticsDetails(){

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