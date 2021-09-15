import React from "react";
import FunctionPage from "../../../../Function";
import {useRecoilValue} from "recoil";
import {dataSourceStateDictionary} from "../../../../../Store";


export default function FunctionSelector(){

    const{id,type}=useRecoilValue(dataSourceStateDictionary);


    if(id && type){
        return  <FunctionPage ruleObj={id} functionObj={type} />
    }

   return <></>
}