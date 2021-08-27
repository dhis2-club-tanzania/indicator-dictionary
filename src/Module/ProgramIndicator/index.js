import Introduction from "./Components/Introduction";
import React from 'react'
import DataSource from "./Components/DataSource/dataSource";


export default function ProgramIndicatorPage({id}){


    return <div>
        <Introduction id={id} />
        <DataSource id={id} />
    </div>
}