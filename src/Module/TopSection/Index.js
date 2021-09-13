
import React, {useState,useEffect} from "react";
import { Field } from '@dhis2/ui'
import {Input} from "@material-ui/core";
import { Modal,ButtonStrip,Button,ModalTitle,ModalContent,ModalActions, Radio } from '@dhis2/ui'
import SearchResult from "./Components/SearchResult.js";
import classes from "./TopSection.module.css"
import {useGetSearchResult} from "../../Utils/Hooks/TopBar";
import {dataSourceTypes, dataTypes} from "../../Utils/Models";
import {useDataEngine} from "@dhis2/app-runtime";
import Loader from "../../Shared/Componets/Loaders/Loader";
import Error from "../../Shared/Componets/Error/ErrorAPIResult";
import {selector, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {searchKeywordTopBar, selectedRadioSearchTopBar} from "../../Store/TopBar";
import {forEach} from "lodash";
import _ from "lodash";

export default function TopSection(){


    const engine=useDataEngine();
    const [searchKeyWord,setSearchKeyWord]= useRecoilState(searchKeywordTopBar)
    const [selectedSource,setSelectedSource]=useRecoilState(selectedRadioSearchTopBar);

    const{loading,error,data}=useGetSearchResult(searchKeyWord,selectedSource,engine)
    // let{loading,error,data}=useGetSearchResult("U4t3B3oUp71",dataSourceTypes.INDICATOR,engine)


    // useEffect(()=>{
    //
    //
    // },[searchKeyWord,selectedSource])


    const [radioSelector,setRadioSelector]=useState([0,0,0,0,0])


    useEffect(()=>{
        updateRadioSelector(0)
    },[])


    function inputHandler(str){
        setSearchKeyWord(str)
    }

    function updateRadioSelector(index){
        let tmp=[0,0,0,0,0]
        tmp[index]=1
        setRadioSelector(tmp)
        if(index==0){
            setSelectedSource(dataSourceTypes.DATA_ELEMENT)
        }
        if(index==1){
            setSelectedSource(dataSourceTypes.DATA_ELEMENT_GROUP)
        }
        if(index==2){
            setSelectedSource(dataSourceTypes.INDICATOR)
        }
        if(index==3){
            setSelectedSource(dataSourceTypes.DATA_ELEMENT_GROUP)
        }
        if(index==4){
            setSelectedSource(dataSourceTypes.FUNCTION)
        }

    }


    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }


    return <div>
        <div className={classes.container} >
            <div>
                <Field label="Search">
                    <Input label="An second input" name="input2" onChange={(e)=>{inputHandler(e.target.value)}} />
                </Field>
            </div>

            <div className={classes.topComponents}>Search in:</div>

            <div className={classes.topComponents}>
                <Radio  checked={false}  label="Data Element"  onChange={()=>{updateRadioSelector(0)}} checked={radioSelector[0]}   />

            </div>
            <div className={classes.topComponents}>
                <Radio  checked={false}  label="Data Element Group"  onChange={()=>{updateRadioSelector(1)}} checked={radioSelector[1]}  />

            </div>
            <div className={classes.topComponents}>
                <Radio  checked={false}  label="Indicator"  checked={radioSelector[2]} onChange={()=>{updateRadioSelector(2)}}    />

            </div>
            <div className={classes.topComponents}>
                <Radio  checked={false}  label="Indicator Group" checked={radioSelector[3]} onChange={()=>{updateRadioSelector(3)}}  />

            </div>
            <div className={classes.topComponents} >
                <Radio  checked={false}  label="Function"  checked={radioSelector[4]} onChange={()=>{updateRadioSelector(4)}} />

            </div>



        </div>

        <SearchResult result={data} />
    </div>

}




