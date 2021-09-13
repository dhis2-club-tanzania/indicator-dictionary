import React, {useEffect, useState} from "react";
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

export default function ChipsSection(){



    //variables
    const[dataSourceValues,setDataSourcesValues]=useState([]);

    const updateDataSourceStateDictionaryHandler= useSetRecoilState(dataSourceStateDictionary)
    const arrayDataSource=useRecoilValue(dataSourcesTopBar)

    console.log(arrayDataSource)

    const [loading,setLoading]=useState()
    const [error,setError]=useState()

    //hooks
    const engine=useDataEngine()
    useEffect(()=>{
      async function fetch(){
          const tmp=await getDataSourceValues(engine,arrayDataSource)
          setDataSourcesValues((prevState) =>{
              return prevState.concat(tmp)
          })

          updateDataSourceStateDictionaryHandler({id:tmp[0]?.id,type:tmp[0]?.type})

      }
        setLoading(true)
        setError(false)
       fetch().then(()=>{
           setLoading(false)



       }).catch((error)=>{
           setLoading(false)
           setError(error)
       })

    },[JSON.stringify(arrayDataSource)])


    function updateSelected(index){
        if(dataSourceValues.length>0){
            dataSourceValues.forEach((dt)=>{
                dt.selected=false
            })

            dataSourceValues[index].selected=true
        }
    }


    //functions
  async function getDataSourceValues(engine,arrayDataSource){
        let promisArr= IdentifiableObjectDataSource(engine,arrayDataSource)
        return await Promise.all(promisArr).then(value => {
             return value.map((obj, index) => {

                 return {
                     id: idOrRuleSelector(arrayDataSource[index],obj[0]),
                     type: typeOrFunctionSelector(arrayDataSource[index],obj[0]),
                     displayName:displayNameSelector(arrayDataSource[index],obj[0]),
                     index: index,
                     selected: index===0?true:false
                 }
             })
        })
    }

    if(loading){
       return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }


    return<div>

        {dataSourceValues?.map((dt,index)=>{
            return <Chip key={index} selected={dt.selected} onClick={()=>{
                updateDataSourceStateDictionaryHandler({id:dt.id,type:dt.type})
                updateSelected(index)
            }}>{displayNameLength(dt.displayName)}</Chip>
        })}

        <DataSourceSelector />
    </div>



}