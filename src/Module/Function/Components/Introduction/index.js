import React from 'react'
import i18n from '@dhis2/d2-i18n'
import IdentifiedBy from "../../../../Shared/Componets/IdentifiedBy/Index";


export default function Introduction({selected}){



    return <div>
       <h3>{i18n.t("Introduction")} </h3>
       <p> <b> {selected?.displayName} </b> {i18n.t(" can be best described as:")}
        {selected?.description}. </p>
        <IdentifiedBy id={selected?.id} href={selected?.href}  />


    </div>
}