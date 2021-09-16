import React from "react";
import _ from "lodash";
import { Field, Input,Button} from '@dhis2/ui'
import {
    allFunctionsRulesInStore,
    oneFunctionSelected,
    searchedResultRules,
    showAllFunctions, showFunctionsSearchResult
} from "../../../../../Store/FunctionDictionary";
import {useSetRecoilState,useRecoilValue} from "recoil";
import classes from "./Search.module.css";


export default function SearchComponent({handlePrint}){

    const  debounceInputHandler=_.debounce(inputHandler,1000)
    const debouncedLooseFocus=_.debounce(onLoseFocusHandler,100)

    const allRules=useRecoilValue(allFunctionsRulesInStore)
    const updateFunctionsRulesListHandler=useSetRecoilState(searchedResultRules)
    const updateShowAllFunctions=useSetRecoilState(showAllFunctions)

    const updateShowFunctionsSearchResult=useSetRecoilState(showFunctionsSearchResult)

    const updateOneFunctionSelected=useSetRecoilState(oneFunctionSelected)

    function inputHandler(str){
        updateShowAllFunctions(false)
        updateOneFunctionSelected(true)

        let searchRes=_.filter(allRules,((e)=>{
           return   e?.displayName?.match(RegExp(str))
        }))


        updateFunctionsRulesListHandler((prev)=>{
            return _.concat([],searchRes)
        })
    }

    function onLoseFocusHandler(){
        updateShowFunctionsSearchResult(false)
    }
    function onGainFocusHandler(str){
        updateShowAllFunctions(false)
        updateOneFunctionSelected(false)
        let searchRes=_.filter(allRules,((e)=>{
            return   e?.displayName?.match(RegExp(str))
        }))

        updateFunctionsRulesListHandler((prev)=>{
            return _.concat([],searchRes)
        })
        updateShowFunctionsSearchResult(true)

    }

    return  <div className={classes.container}>
        <div>
            <Field label="Search">
                <Input label="An second input" name="input2" onChange={(e)=>{debounceInputHandler(e?.value)}} onBlur={()=>{debouncedLooseFocus()}} onFocus={(e)=>{onGainFocusHandler(e?.value)}} />
            </Field>

        </div>

        <div className={classes.printButton}>
            <Button  onClick={handlePrint} >
                Print
            </Button>
        </div>

    </div>
}