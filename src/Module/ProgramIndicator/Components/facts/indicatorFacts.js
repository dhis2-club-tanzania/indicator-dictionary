import {
    DataTable,
    DataTableToolbar,
    DataTableHead,
    TableHead,
    DataTableBody,
    TableBody,
    DataTableFoot,
    DataTableRow,
    DataTableCell,
    DataTableColumnHeader,
} from '@dhis2/ui'
import IndicatorGroupRow from './indicatorGroupRow'
import { CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'
import { useEffect} from 'react'
import Introduction from "../introduction/introduction";
import PropTypes from "prop-types";
const query =  {
    indicatorGroups:{
      resource:"programIndicators",
      id: ({id})=>id,
        params:{
          fields:["programIndicatorGroups[id,code,displayName,programIndicators[id,displayName]]"]
        }
    }
  }

export default function IndicatorFacts({id}){

    const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})

    useEffect(()=>{refetch({id})},[id])

    if(loading){
        return <CircularLoader />
     }
 
     if(error){
        return <p> {error} </p> 
     }  


     if(data?.indicatorGroups?.programIndicatorGroups){
         return <p>There are no indicator facts associated with this indicator</p>
     }
 

    return (<div>
        <h3>Program Indicator facts</h3>

        <p>Belongs to the following program groups of indicators</p>

        <div>


        <DataTable>
    <TableHead>
        <DataTableRow>
            <DataTableColumnHeader>
               #
            </DataTableColumnHeader>
            <DataTableColumnHeader>
               Name
            </DataTableColumnHeader>
            <DataTableColumnHeader>
              Code
            </DataTableColumnHeader>
            <DataTableColumnHeader>
            Indicators
            </DataTableColumnHeader>

        </DataTableRow>
    </TableHead>
    <TableBody>
        {data?.indicatorGroups?.programIndicatorGroups?.map((group,index)=>{
            return  (<IndicatorGroupRow key={group?.id} no={index} name={group?.displayName} code={group?.id} indicators={programIndicators?.indicators} />)
        })}
        
        
    </TableBody>
    
</DataTable>
        </div>

    </div>)
}



IndicatorFacts.prototype={
    id:PropTypes.string.isRequired
}