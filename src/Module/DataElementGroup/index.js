
import React from "react";
import Introduction from "./Components/Introduction";
import DataSources from "./Components/DataSources";


export default function DataElementGroupPage(props){

   const id=props.id


    return  <div style={{display:"flex",flexDirection:"column"}}>
                <Introduction id={id} />

                <DataSources id={id} />

            </div>
}