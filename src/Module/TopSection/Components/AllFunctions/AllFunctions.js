import {useDataEngine} from "@dhis2/app-runtime";
import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";
import React from "react";
import {useGetAllFunctionsId} from "../../../../Utils/Hooks/FunctionDictionary";
import OneFunction from "./Components/OneFunction";
import { Field, Input} from '@dhis2/ui'
import _ from "lodash";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {
    allFunctionsRulesInStore, oneFunctionSelected,
    searchedResultRules, showAllFunctions,
    showFunctionsSearchResult
} from "../../../../Store/FunctionDictionary";
import {dataTypes} from "../../../../Utils/Models";


export default function AllFunctions({selected}){

    const engine=useDataEngine()
    const{loading,error,data}=useGetAllFunctionsId(engine);

    const functionSelected=useRecoilValue(oneFunctionSelected)
    const showAllFunction=useRecoilValue(showAllFunctions)



    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }




//show this when none is clicked      and search result is empty
return !functionSelected && showAllFunction && <ul>
            {data?.map((e)=>{
                return  <OneFunction id={e} />
            })}
        </ul>



    // return showResult && (searchString!="" || typeof searchString !=dataTypes.UNDEFINED) ?
    //         <div>
    //
    //
    //         <ul>
    //             {data?.map((e)=>{
    //                 return  <OneFunction id={e} />
    //             })}
    //         </ul>
    //         </div>
    //     :
    //         <div>
    //         <div>
    //             <Field label="Search">
    //                 <Input label="An second input" name="input2" onChange={(e)=>{debounceInputHandler(e.target.value)}} />
    //             </Field>
    //         </div>
    //         </div>
}