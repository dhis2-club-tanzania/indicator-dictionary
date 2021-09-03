
import {useDataEngine, useDataQuery} from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";
import PropTypes from "prop-types";
import React,{useEffect} from 'react'
import Loader from "../../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../../Shared/Componets/Error/ErrorAPIResult";
import {useGetDataSet} from "../../../../../Utils/Hooks";
import {dataSetDataElementCountState, indicatorGroupDataSetCount} from "../../../../../Store";
import {useSetRecoilState} from "recoil";
import _ from "lodash";


export default  function DataSets({aggregate}){


    const updateCount=useSetRecoilState(indicatorGroupDataSetCount)

    const engine=useDataEngine()

    let onlyIds=aggregate.map((el)=>{
        return el?.split(".")[0] //since id may come as with . to indicate with category comb
    })

    const {loading,error,data}=useGetDataSet(onlyIds,engine)

    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }


    const res=data?.dataSets;


   let allDataSets=[];
    res?.map((e)=>{
        e.map((el)=>{
            allDataSets.push(el)
        })
    })

    allDataSets=_.uniqWith(allDataSets,_.isEqual)

    console.log(allDataSets)

    //
    // let tmp= res?.map((e)=>{
    //     let inTemp= _.concat([],e)
    // })
    // console.log(res)
    // console.log(tmp)

    // updateCount its used in the facts components
    let totalCount=0
    res?.map((e)=>{
        totalCount+=e?.length
    })
    updateCount( (prev)=>{return prev+totalCount} )


    return (<div>
        <b>Datasets </b>
        <ul>
            {allDataSets?.map((datset)=>{
                return <li key={datset?.id}>{datset?.displayName} submitting {datset?.periodType} after every {datset?.timelyDays} days </li>
            })}
       </ul>



    </div>)

}

DataSets.propTypes={
    id:PropTypes.string.isRequired
}