import {useParams} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {dataSourceStateDictionary} from "../../Store";
import React, {useEffect, useRef, useState} from 'react'
import DataSourceSelector from "../../Module/ChipsSection/Components/DataSourceSelector/DataSourceSelector";
import {useIdentifyObject} from "../../Utils/Hooks/AllMetaDataPage";
import {useDataEngine} from "@dhis2/app-runtime";
import Loader from "../../Shared/Componets/Loaders/Loader";
import Error from "../../Shared/Componets/Error/ErrorAPIResult";
import ChipsSection from "../../Module/ChipsSection/ChipsSection";
import {useReactToPrint} from "react-to-print";
import {dataSourcesTopBar} from "../../Store/TopBar";
import TopSection from "../../Module/TopSection/Components/OtherMetaData/Index";
import _ from "lodash";
import classes from "../../Module/ChipsSection/Components/chipsSection.module.css";


export default function AllMetaData(){

    let { metaDataType,id } = useParams();
    const updateSourceSelector=useSetRecoilState(dataSourceStateDictionary)
    const updateDataSourcesTopBar=useSetRecoilState(dataSourcesTopBar)
    const componentRef = useRef();

    const engine=useDataEngine()
    const {loading,error,data}=useIdentifyObject(engine,id)

    const handlePrint=useReactToPrint({
        content:()=>componentRef.current
    })

    if (loading) {
        return <Loader/>
    }
    if (error) {
        return <Error error={error} />
    }


    updateDataSourcesTopBar([{
        id:data?.id,
        href:data?.href,
        displayName:data?.displayName
    }])


    // localStorage.setItem('chips', []);

    function updateChips(newObjects){
       let current= JSON.parse(localStorage.getItem("chips"));
        let updated;
       if(current){
           if(current?.length>5){
               current=current.slice(0,5)
           }
           updated  =_.concat([],newObjects,current)

       }else{
           updated=_.concat([],newObjects)
       }

        updated=_.uniqBy(updated,"id")
        localStorage.setItem("chips",JSON.stringify(updated))
    }

    // updateSourceSelector((prev)=>{
    //     let res
    //     if(prev?.length>5){
    //         prev=prev.slice(0,5)
    //         res=_.concat([],{id:id,type:metaDataType},prev)
    //     }else{
    //         res=_.concat([],{id:id,type:metaDataType},prev)
    //     }
    //     return  res
    //
    // })

    updateChips({id:id,type:metaDataType,displayName:data?.displayName})

    return <div>
        <TopSection handlePrint={handlePrint} />
        <ChipsSection  />
        <div ref={componentRef}  className={classes.printSection} >
            <DataSourceSelector />
        </div>

    </div>

}