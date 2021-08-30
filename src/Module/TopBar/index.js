import React, {useEffect, useState} from "react";
import {Chip} from '@dhis2/ui'

import { CircularLoader } from '@dhis2/ui'
import {useDataEngine} from "@dhis2/app-runtime";
import IdentifiableObjectDataSource, {displayNameLength, getDataSourceType} from "../../Utils/Functions/FormulaTopBar";
import DataSourceSelector from "./Components/DataSourceSelector";
import {useRecoilState, useSetRecoilState} from "recoil";
import {dataSourceStateDictionary} from "../../Store";
import Error from "../../Shared/Componets/Error/ErrorAPIResult";
import Loader from "../../Shared/Componets/Loaders/Loader";

export default function TopBar(props){

    //variables
    const[dataSourceValues,setDataSourcesValues]=useState([]);

    const [currentSelected,updateDataSourceStateDictionaryHandler]= useRecoilState(dataSourceStateDictionary)


    const arrayDataSource=props.dataSources;  //these are arrays of ids

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

    },[])


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
                     id: obj[0].id,
                     type: getDataSourceType(obj[0].href),
                     displayName: obj[0].displayName,
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
            return <Chip key={dt.id} selected={dt.selected} onClick={()=>{
                updateDataSourceStateDictionaryHandler({id:dt.id,type:dt.type})
                updateSelected(index)
            }}>{displayNameLength(dt.displayName)}</Chip>
        })}

        <DataSourceSelector />
    </div>



}