import Introduction from "./Components/Introduction/introduction";
import DataSource from "./Components/DataSource/dataSource";
import Facts from "./Components/Facts";
import AnalyticsDetails from "./Components/AnalyticsDetails";

import AccesibilityAndSharing from "../../Shared/Componets/AccesibilityAndSharing";
import React from 'react'
import RelatedIndicator from "../../Shared/Componets/RelatedIndicator";


export default function DataElementPage(props){
    const id=props.id


    return (<div style={{display:"flex",flexDirection:"column"}}>
            <Introduction id={id} />
            <DataSource id={id}  />
            <Facts  id={id}  />
            <AnalyticsDetails id={id}/>
            <RelatedIndicator id={id} resourceType={"Data Element"}  />
            <AccesibilityAndSharing id={id} resourceType={"dataElements"} />

    </div>
    )

}