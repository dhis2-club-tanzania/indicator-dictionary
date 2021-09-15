import React from "react";
import _ from "lodash";
import { Field, Input} from '@dhis2/ui'
import {
    allFunctionsRulesInStore,
    oneFunctionSelected,
    searchedResultRules,
    showAllFunctions
} from "../../../../../Store/FunctionDictionary";
import {useSetRecoilState,useRecoilValue} from "recoil";

export default function SearchComponent(){

    const  debounceInputHandler=_.debounce(inputHandler,1000)

    const allRules=useRecoilValue(allFunctionsRulesInStore)
    const updateFunctionsRulesListHandler=useSetRecoilState(searchedResultRules)
    const updateShowAllFunctions=useSetRecoilState(showAllFunctions)

    const updateOneFunctionSelected=useSetRecoilState(oneFunctionSelected)

    function inputHandler(str){

        updateShowAllFunctions(false)
        updateOneFunctionSelected(true)

        let searchRes=_.filter(allRules,((e)=>{

           return  e.rule.name===str
        }))

        updateFunctionsRulesListHandler((prev)=>{
            return _.concat([],searchRes)
        })

    }


    return  <div>
        <Field label="Search">
            <Input label="An second input" name="input2" onChange={(e)=>{debounceInputHandler(e?.value)}} />
        </Field>
    </div>
}