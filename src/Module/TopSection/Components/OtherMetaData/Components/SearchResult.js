import {displayNameLength} from "../../../../../Utils/Functions/FormulaTopBar";
import React, {useState,useEffect} from "react";
import {Chip} from '@dhis2/ui'
import {useSetRecoilState} from "recoil";
import {dataSourcesTopBar} from "../../../../../Store/TopBar";
import _ from "lodash";

export default function SearchResult({result}){


    const updateDataSources=useSetRecoilState(dataSourcesTopBar)
    const [res,setRes]=useState([]);

    useEffect(()=>{
        setRes(result)
    },[JSON.stringify(result)])


function onClickItemHandler(e){

    updateDataSources((prev)=>{
        let res
        if(prev?.length>5){
            let temp=prev
           // prev=_.filter(prev,(e)=>{
           //     e?.id!==temp[3]?.id;
           // })
            prev=prev.slice(0,5)
            res=_.concat([],e,prev)
        }else{
            res=_.concat([],e,prev)
        }
        return  res

    })

    setRes([])
}

    return <div>
        {res?.map((e,index)=>{
            return <Chip key={index}  onClick={()=>{onClickItemHandler(e)}}>{displayNameLength(e?.displayName)}</Chip>
        })}

    </div>
}