import {useDataEngine} from "@dhis2/app-runtime";
import {useGetAllFunctionsId, useGetFunctionsDetails} from "../../../../../Utils/Hooks/FunctionDictionary";
import Loader from "../../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../../Shared/Componets/Error/ErrorAPIResult";
import React, {useState,useEffect} from "react";
import {
    allFunctionsRulesInStore,
    oneFunctionSelected,
    showFunctionsSearchResult
} from "../../../../../Store/FunctionDictionary";
import {useSetRecoilState} from "recoil";
import _ from "lodash";
import {dataSourceStateDictionary} from "../../../../../Store";


export default function OneFunction({id}){

    const engine=useDataEngine()
    const{loading,error,data}=useGetFunctionsDetails(engine,[id]);
    const updateOneFunctionSelected=useSetRecoilState(oneFunctionSelected)
    const updateFunctionsRulesListHandler=useSetRecoilState(allFunctionsRulesInStore);
    const updateDataSourceStateDictionaryHandler= useSetRecoilState(dataSourceStateDictionary)

    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }

    let result=data[0]
    let resRule=[]

    let allRules=result?.rules?.map((e)=>{
        return e
    })
    resRule=allRules.map((e)=>{
        return {rule:e ,function:result,displayName:e?.name+", "+result?.displayName}
    })

    updateFunctionsRulesListHandler((prev)=>{
        return _.concat([],prev,resRule)
    })

    function sendToRuleDictionaryHandler(ruleObj,functionObj){
        updateOneFunctionSelected(true)
        updateDataSourceStateDictionaryHandler({id:ruleObj,type:functionObj})
    }

       return <ul>
            {resRule?.map((e)=>{
                return <li key={resRule.id} onClick={()=> sendToRuleDictionaryHandler(e.rule,result)} >{e?.displayName}</li>
            })}</ul>




}