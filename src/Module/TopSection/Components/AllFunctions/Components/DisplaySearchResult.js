import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {
    oneFunctionSelected,
    searchedResultRules,
    showFunctionsSearchResult
} from "../../../../../Store/FunctionDictionary";
import React from "react";
import {dataSourceStateDictionary} from "../../../../../Store";


export default function DisplaySearchResult(){

    const [searchResult,setSearchResult]=useRecoilState(searchedResultRules);
    const updateDataSourceStateDictionaryHandler= useSetRecoilState(dataSourceStateDictionary)
    const updateOneFunctionSelected=useSetRecoilState(oneFunctionSelected)
    const showSearchResult=useRecoilValue(showFunctionsSearchResult)


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

    console.log(showSearchResult)

    return showSearchResult && <ul>
        {/*<b>{result?.name}</b>*/}
        {searchResult?.map((e)=>{
            return <li key={searchResult.id} onClick={()=> sendToRuleDictionaryHandler(e?.rule,e?.function)} >{e?.displayName}</li>
        })}</ul>
}