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


export default function AllFunctions({selected}) {

    const engine = useDataEngine()
    const {loading, error, data} = useGetAllFunctionsId(engine);

    const functionSelected = useRecoilValue(oneFunctionSelected)
    const showAllFunction = useRecoilValue(showAllFunctions)


    if (loading) {
        return <Loader text={""}/>
    }
    if (error) {
        return <Error error={error}/>
    }

    return !functionSelected && showAllFunction && <ul>
        All Functions and their rules
        {data?.map((e) => {
            return <OneFunction id={e}/>
        })}
    </ul>

}