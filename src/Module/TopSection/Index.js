
import React, {useState} from "react";
import { Field } from '@dhis2/ui'
import {Input} from "@material-ui/core";
import { Modal,ButtonStrip,Button,ModalTitle,ModalContent,ModalActions, Radio } from '@dhis2/ui'
import Filter from "./Components/Filter";
import classes from "./TopSection.module.css"
import {useGetSearchResult} from "../../Utils/Hooks/TopBar";
import {dataSourceTypes, dataTypes} from "../../Utils/Models";
import {useDataEngine} from "@dhis2/app-runtime";
import Loader from "../../Shared/Componets/Loaders/Loader";
import Error from "../../Shared/Componets/Error/ErrorAPIResult";
import {useSetRecoilState} from "recoil";
import {dataSourcesTopBar} from "../../Store/TopBar";

export default function TopSection(){

    const engine=useDataEngine();
    const{loading,error,data}=useGetSearchResult("U4t3B3oUp71",dataSourceTypes.INDICATOR,engine)


    const updateDataSources=useSetRecoilState(dataSourcesTopBar)



    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }


    if(typeof data!==dataTypes.UNDEFINED){
        updateDataSources(data?.map((e)=>{
            return e.id
        }))
    }

    function inputHandler(str){
        console.log(str)

    }

    return <div className={classes.container} >
        <Field label="Search">
            <Input label="An second input" name="input2" onChange={(e)=>{inputHandler(e.target.value)}} />
        </Field>
        <div >Search in:</div>
        <Radio  checked={false}  label="Data Element"  name="DtEle" onChange={()=>{}} valid value="valid"  />

        <Radio  checked={false}  label="Data Element Group"  name="DtEle" onChange={()=>{}} valid value="valid"  />

        <Radio  checked={false}  label="Indicator"  name="DtEle" onChange={()=>{}} valid value="valid"  />

        <Radio  checked={false}  label="Indicator Group"  name="DtEle" onChange={()=>{}} valid value="valid"  />

        <Radio  checked={false}  label="Function"  name="DtEle" onChange={()=>{}} valid value="valid"  />




        <div>
            {/*<ButtonStrip>*/}

            {/*    <Button onClick={() => setHide(false)} >*/}
            {/*        Filter*/}
            {/*    </Button>*/}
            {/*</ButtonStrip>*/}


            {/*{ !hide && (*/}
            {/*    <Modal hide={hide}>*/}
            {/*        <ModalTitle>Can be hidden</ModalTitle>*/}

            {/*        <ModalContent>*/}
            {/*            <Filter />*/}

            {/*        </ModalContent>*/}

            {/*        <ModalActions>*/}
            {/*            <ButtonStrip end>*/}
            {/*                <Button onClick={() => setHide(true)} primary >*/}
            {/*                    Done*/}
            {/*                </Button>*/}


            {/*            </ButtonStrip>*/}
            {/*        </ModalActions>*/}
            {/*    </Modal>*/}
            {/*)*/}

            {/*}*/}
        </div>
    </div>
}




