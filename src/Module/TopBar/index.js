import React, {useEffect, useState} from "react";
import {Chip} from '@dhis2/ui'

import {useDataEngine} from "@dhis2/app-runtime";
import IdentifiableObjectDataSource, {displayNameLength, getDataSourceType} from "../../Utils/Functions/FormulaTopBar";
import DataSourceSelector from "./Components/DataSourceSelector";
import {useSetRecoilState} from "recoil";
import {dataSourceStateDictionary} from "../../Store";

export default function TopBar(props){

    //variables
    const[dataSourceValues,setDataSourcesValues]=useState([]);

    const[selectedDataSource,setSelectedDataSource]=useState(0)

    const updateDataSourceStateDictionaryHandler= useSetRecoilState(dataSourceStateDictionary)

    const arrayDataSource=props.dataSources;  //these are arrays of ids

    //hooks
    const engine=useDataEngine()
    useEffect(()=>{
      async function fetch(){
          const tmp=await getDataSourceValues(arrayDataSource)
          setDataSourcesValues((prevState) =>{
              return prevState.concat(tmp)
          })
          updateDataSourceStateDictionaryHandler({id:tmp[0]?.id,type:tmp[0]?.type})
      }
      fetch()

    },[])

    //functions

  async function getDataSourceValues(arrayDataSource){
        let promisArr= IdentifiableObjectDataSource(engine,arrayDataSource)
        return await Promise.all(promisArr).then(value => {
             return value.map((obj, index) => {
                 return {
                     id: obj[0].id,
                     type: getDataSourceType(obj[0].href),
                     displayName: obj[0].displayName,
                     index: index
                 }
             })
        })
    }

    return<div>
        {dataSourceValues?.map((dt)=>{
            return <Chip key={dt.id}  onClick={()=>updateDataSourceStateDictionaryHandler({id:dt.id,type:dt.type}) }>{displayNameLength(dt.displayName)}</Chip>
        })}

        <DataSourceSelector />
    </div>



}