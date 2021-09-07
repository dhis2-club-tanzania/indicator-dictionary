import React, {useState} from 'react'
import {displayNameLength} from "../../../../../Utils/Functions/FormulaTopBar";
import {Chip} from '@dhis2/ui'
import {functionDictionarySourceSelector} from "../../../../../Store/FunctionDictionary";
import {useSetRecoilState} from "recoil";


export default function TopSection({array}){

    const[dataSourceValues,setDataSourcesValues]=useState([]);
    const updateFunctionSelectedHandler=useSetRecoilState(functionDictionarySourceSelector)



    function updateSelected(index){
        if(dataSourceValues.length>0){
            dataSourceValues.forEach((dt)=>{
                dt.selected=false
            })

            dataSourceValues[index].selected=true
        }
    }

    return <div>
        {array?.map((e,index)=>{
            return  <Chip key={e.id} selected={e.selected}  onClick={()=>{
                updateFunctionSelectedHandler(index)
            }}>{displayNameLength(e.displayName)}</Chip>
        })}
    </div>
}


