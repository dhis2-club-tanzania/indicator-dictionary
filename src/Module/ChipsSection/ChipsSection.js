import React, {useEffect, useState,useRef} from "react";
import {Chip} from '@dhis2/ui'

import { CircularLoader } from '@dhis2/ui'
import {useDataEngine} from "@dhis2/app-runtime";
import IdentifiableObjectDataSource, {
    displayNameLength,
    displayNameSelector,
    getDataSourceType, idOrRuleSelector, typeOrFunctionSelector
} from "../../Utils/Functions/FormulaTopBar";
import DataSourceSelector from "./Components/DataSourceSelector/DataSourceSelector";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {dataSourceStateDictionary} from "../../Store";
import Error from "../../Shared/Componets/Error/ErrorAPIResult";
import Loader from "../../Shared/Componets/Loaders/Loader";
import {dataSourcesTopBar} from "../../Store/TopBar";
import _ from "lodash";
import classes from './Components/chipsSection.module.css'

import { useReactToPrint } from 'react-to-print';
import {useHistory} from "react-router-dom";


export default function ChipsSection({componentRef}){

    const history= useHistory()
    const arrayDataSource=JSON.parse(localStorage.getItem("chips"))??[]
    const updateDataSourceStateDictionaryHandler= useSetRecoilState(dataSourceStateDictionary)

    //variables
    const[dataSourceValues,setDataSourcesValues]=useState([]);
    const [selected,setSelected]=useState(0)

    useEffect(()=>{
        let dataSources=arrayDataSource?.map((e,index)=>{
            return {id:e?.id,type:e?.type,displayName:e?.displayName,index:index,selected:index===0?true:false}
        })
        setDataSourcesValues(dataSources)
        updateDataSourceStateDictionaryHandler( {id:dataSources[0]?.id,type:dataSources[0]?.type})
    },[JSON.stringify(arrayDataSource)])


    function updateSelected(index){
        if(dataSourceValues.length>0){
            let dt=dataSourceValues;
            dt.forEach((e)=>{
                e.selected=false
            })
            dt[index].selected=true
            setDataSourcesValues(dt)
            setSelected((prev)=>{  //to trigger reload
                return prev+1
            })
        }
    }


    return<div>

        {dataSourceValues?.map((dt,index)=>{
            return <Chip key={index} selected={dt.selected} onClick={()=>{
                const type= dt?.type
                const id=dt?.id
                history.push(`/${type}/${id}`)
                updateDataSourceStateDictionaryHandler({id:dt.id,type:dt.type})
                updateSelected(index)
            }}>{displayNameLength(dt.displayName)}</Chip>
        })}

        <div className={classes.printSection} ref={componentRef} >
            {/*<DataSourceSelector  />*/}
        </div>

    </div>



}