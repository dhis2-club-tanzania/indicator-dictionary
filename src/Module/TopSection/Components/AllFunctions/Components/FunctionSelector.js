import React from "react";
import FunctionPage from "../../../../Function";
import {useRecoilValue} from "recoil";
import {dataSourceStateDictionary} from "../../../../../Store";
import classes from "../../../../ChipsSection/Components/chipsSection.module.css";


export default function FunctionSelector({componentRef}){

    const{id,type}=useRecoilValue(dataSourceStateDictionary);


    if(id && type){
        return <div className={classes.printSection} ref={componentRef}>
            <FunctionPage ruleObj={id} functionObj={type} />
        </div>
    }

   return <></>
}