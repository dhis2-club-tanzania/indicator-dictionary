
import React from "react";
import Introduction from "./Components/Introduction";
import DataSources from "./Components/DataSources";
import Facts from "./Components/Facts";
import RelatedIndicator from "./Components/RelatedIndicator";


export default function DataElementGroupPage(props){

   const id=props.id


    return  <div style={{display:"flex",flexDirection:"column"}}>
                <Introduction id={id} />

                <DataSources id={id} />

                <Facts id={id}/>


                <RelatedIndicator id={id} />
            </div>
}