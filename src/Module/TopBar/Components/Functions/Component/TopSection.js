import React from 'react'
import {displayNameLength} from "../../../../../Utils/Functions/FormulaTopBar";
import {Chip} from '@dhis2/ui'
import {functionDictionarySourceSelector} from "../../../../../Store/FunctionDictionary";
import {useSetRecoilState} from "recoil";


export default function TopSection({array}){

    const updateFunctionSelectedHandler=useSetRecoilState(functionDictionarySourceSelector)

    return <div>
        {array?.map((e,index)=>{
            return  <Chip key={e.id}  onClick={()=>{
                updateFunctionSelectedHandler(index)
            }}>{displayNameLength(e.displayName)}</Chip>
        })}
    </div>
}