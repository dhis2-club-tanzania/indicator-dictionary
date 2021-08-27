import Introduction from "./Components/Introduction";
import React from 'react'
import DataSource from "./Components/DataSource/dataSource";
import ProgramIndicatorFacts from "./Components/facts/ProgramIndicatorFacts";


export default function ProgramIndicatorPage({id}){


    return <div>
        <Introduction id={id} />
        <DataSource id={id} />
        <ProgramIndicatorFacts id={id} />
    </div>
}