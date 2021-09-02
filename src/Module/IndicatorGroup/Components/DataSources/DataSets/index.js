
import {useDataEngine, useDataQuery} from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";
import PropTypes from "prop-types";
import React,{useEffect} from 'react'
import Loader from "../../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../../Shared/Componets/Error/ErrorAPIResult";
import {useGetDataSet} from "../../../../../Utils/Hooks";
import {dataSetDataElementCountState} from "../../../../../Store";
import {useSetRecoilState} from "recoil";


export default  function DataSets({aggregate}){


    // const updateCount=useSetRecoilState(dataSetDataElementCountState)

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

    //update count its used in the facts components
    // let totalCount=0
    // res?.map((e)=>{
    //     totalCount+=e?.length
    // })
    // updateCount(totalCount)

    return (<div>
        <b>Datasets </b>
            {aggregate?.map((el,index)=>{
                return  <ul>
                    {res[index]?.map((datset)=>{
                        return <li key={datset?.id}>{datset?.displayName} submitting {datset?.periodType} after every {datset?.timelyDays} days </li>

                    })}
                </ul>

            })}


    </div>)

}

DataSets.propTypes={
    id:PropTypes.string.isRequired
}