
import { CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'
import { useEffect} from 'react'
import Introduction from "../introduction/introduction";
import PropTypes from "prop-types";
import OtherDetailTable from "./Components/OtherDetails";
import {dataElementDomainTypes, dataTypes} from "../../../../Utils/Models";
import DataSets from "./Components/DataSets";
import Programs from "./Components/Programs";

const query = {
    sources:{
      resource:"dataElements",
          id: ({id})=>id,
        params:{
          fields:["domainType","style","optionSetValue","commentOptionSet[displayName]","legendSets[id,displayName]","aggregationLevels"]
        }
    } 
  }


// https://dhis2.nnkogift.me/api/dataElements/qrur9Dvnyt5.json?fields=style,optionSetValue,commentOptionSet[displayName],legendSets[id,displayName],aggregationLevels



export default  function DataSource({id}){


        const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})

        useEffect(()=>{refetch({id})},[id])


        // if(loading){
       //    return <CircularLoader />
       // }
       //
       // if(error){
       //    return <p> {error} </p>
       // }
       //

    return (
        <>
        { (data?.sources?.domainType==dataElementDomainTypes.AGGREGATE && data!==dataElementDomainTypes.UNDEFINED)?  <DataSets id={id} /> : <Programs id={id} />}

            <div>
                <OtherDetailTable  other={data?.sources}/>
            </div>

        </>
    )

    }


DataSource.prototype={
    id:PropTypes.string.isRequired
}