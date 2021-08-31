
import React from "react";
import Introduction from "./Components/Introduction";


export default function DataElementGroupPage(props){

   const id=props.id


    return  <div style={{display:"flex",flexDirection:"column"}}>
                <Introduction id={id} />
           <p>dff   </p>
            </div>
}