import {useDataEngine, useDataQuery} from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";
import PropTypes from "prop-types";
import React, {useEffect} from 'react'
import Loader from "../../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../../Shared/Componets/Error/ErrorAPIResult";
import {useSetRecoilState} from "recoil";
import {useGetIndicatorProgramSource} from "../../../../../Utils/Hooks/DataSource";
import _ from "lodash";
import {indicatorGroupPrograms} from "../../../../../Store/IndicatorGroup";


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


    const updatePrograms=useSetRecoilState(indicatorGroupPrograms)

    const engine=useDataEngine()

    const {loading, error, data}=useGetIndicatorProgramSource(sources,engine)


    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }

    console.log(sources)

    const res=_.concat([],data?.attr??[],data?.prgInd??[],data?.prgDtEl??[])

    const allProgram=_.uniqWith(res,_.isEqual)

    //updating count its used in the facts component
    updatePrograms((prev)=>{return _.concat(prev,allProgram)})

    if(res?.length>0){
        return (<div>
            Programs
            <ul>
                {allProgram?.map((dt,index)=>{
                    return <li key={index}><b>{dt?.displayName}</b> {i18n.t("submitting records on every event(case or individual)")} </li>
                })}
            </ul>

        </div>)
    }else{
        return <></>
    }






}

