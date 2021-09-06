import React from 'react'
import IdentifiedBy from "../../../../Shared/Componets/IdentifiedBy/Index";


export default function Introduction({selected}){

    console.log(selected)

    return <div>
       <h3>Introduction</h3>
       <p> <b> {selected?.displayName} </b> can be best described as:
        {selected?.description}. </p>
        <IdentifiedBy id={selected?.id} href={selected?.href}  />
        {/*Identified by: functionUid*/}

    </div>
}