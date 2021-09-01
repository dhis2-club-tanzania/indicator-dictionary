
import {useDataEngine, useDataQuery} from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";
import PropTypes from "prop-types";
import React,{useEffect} from 'react'
import Loader from "../../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../../Shared/Componets/Error/ErrorAPIResult";
import {useGetDataSet} from "../../../../../Utils/Hooks";


export default  function DataSets({aggregate}){


    const engine=useDataEngine()

    let onlyIds=aggregate.map((el)=>{
        return el?.id
    })

    const {loading,error,data}=useGetDataSet(onlyIds,engine)

    if(loading){
        return  <Loader text={""} />
    }if(error){
        return <Error error={error} />
    }

    const res=data?.dataSets;

    return (<div>
        <ul>
            {aggregate?.map((el,index)=>{
                return <li>
                    {el?.displayName}
                    <ul> {res[index]?.length>1?"sources":""}
                    {res[index]?.map((datset)=>{
                        return <li key={datset?.id}>{datset?.displayName} submitting {datset?.periodType} after every {datset?.timelyDays} days </li>

                    })}
                    </ul>
                </li>
            })}
        </ul>

    </div>)

}

DataSets.propTypes={
    id:PropTypes.string.isRequired
}