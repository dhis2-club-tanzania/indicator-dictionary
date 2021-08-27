
import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
import { useEffect} from 'react'

import Loader from "../../../../Shared/Componets/Loaders/Loader";
import Error from "../../../../Shared/Componets/Error/ErrorAPIResult";

const query = {
    sources:{
      resource:"programIndicators",
          id: ({id})=>id,
        params:{
          fields:["program[id,displayName]"]
        }
    } 
  }

export default  function DataSource({id}) {

    const {loading, error, data, refetch} = useDataQuery(query, {variables: {id}})

    useEffect(() => {
        refetch({id})
    }, [id])


    if (loading) {
        return <Loader text={""}/>
    }
    if (error) {
        return <Error error={error}/>
    }

    return (
        <div>
            Indicator is captured from with following program
            <ul>
                <li>
                {data?.sources?.program?.displayName} submitting records on every event
            </li>


            </ul>


        </div>)
}

