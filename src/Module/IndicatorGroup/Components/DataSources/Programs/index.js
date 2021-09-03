import {useDataEngine, useDataQuery} from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";
import PropTypes from "prop-types";
import React, {useEffect} from 'react'
import Loader from "../../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../../Shared/Componets/Error/ErrorAPIResult";
import {indicatorGroupProgramCount, programDataElementCountState} from "../../../../../Store";
import {useSetRecoilState} from "recoil";
import {useGetIndicatorProgramSource} from "../../../../../Utils/Hooks/DataSource";
import _ from "lodash";


const query = {
    programs: {
        resource: 'programStages',
        params: (({dataElementId})=>({
            fields: [
                'program[id,displayName]'
            ],
            filter: [
                `programStageDataElements.dataElement.id:eq:${dataElementId}`
            ]
        }))
    }
}


export default  function Programs({sources}){


    const updateCount=useSetRecoilState(indicatorGroupProgramCount)

    const engine=useDataEngine()

    const {loading, error, data}=useGetIndicatorProgramSource(sources,engine)


    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }


    const res=_.concat([],data?.attr??[],data?.prgInd??[],data?.prgDtEl??[])

    //updating count its used in the facts component
    updateCount((prev)=>{return prev+res?.length})

    // console.log(res.length)

    if(res?.length>0){
        return (<div>
            <b>Programs </b>
            <ul>
                {res?.map((dt,index)=>{
                    return <li key={index}><b>{dt?.displayName}</b> {i18n.t("submitting records on every event(case or individual)")} </li>
                })}
            </ul>

        </div>)
    }else{
        return <></>
    }






}

