import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {oneFunctionSelected, searchedResultRules} from "../../../../../Store/FunctionDictionary";
import React from "react";
import {dataSourceStateDictionary} from "../../../../../Store";


export default function DisplaySearchResult(){

    const [searchResult,setSearchResult]=useRecoilState(searchedResultRules);
    const updateDataSourceStateDictionaryHandler= useSetRecoilState(dataSourceStateDictionary)
    const updateOneFunctionSelected=useSetRecoilState(oneFunctionSelected)


    if(searchResult?.length==0){
        return <></>
    }

    function sendToRuleDictionaryHandler(ruleObj,functionObj){
        updateOneFunctionSelected(true)
        setSearchResult((prev)=>{
            return []
        })
        updateDataSourceStateDictionaryHandler({id:ruleObj,type:functionObj})
    }

    return <ul>
        {/*<b>{result?.name}</b>*/}
        {searchResult?.map((e)=>{
            return <li key={searchResult.id} onClick={()=> sendToRuleDictionaryHandler(e?.rule,e?.function)} >{e?.rule?.name}</li>
        })}</ul>
}