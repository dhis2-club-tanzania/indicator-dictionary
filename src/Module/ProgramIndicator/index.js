import Introduction from "./Components/Introduction";
import React from 'react'
import DataSource from "./Components/DataSource/dataSource";
import ProgramIndicatorFacts from "./Components/facts/ProgramIndicatorFacts";
import LegendsAnalysis from "./Components/legendsAnalysis/legendsAnalysis";


export default function ProgramIndicatorPage({id}){


    return <div>
        {/*<Introduction id={id} />*/}
        {/*<DataSource id={id} />*/}
        {/*<ProgramIndicatorFacts id={id} />*/}
        <LegendsAnalysis id={id} />
    </div>
}