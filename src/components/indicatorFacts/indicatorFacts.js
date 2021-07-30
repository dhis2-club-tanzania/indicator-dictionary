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

function IndicatorFacts(props){

    let id=props.id
     
    const query =  {
        indicatorGroups:{
          resource:"indicators",
           id,
            params:{
              fields:["indicatorGroups[id,displayName,indicators[id,displayName]]"]
            }
        }
      }


    
     
    const {loading, error, data}   = useDataQuery(query)

    if(loading){
        return <CircularLoader />
     }
 
     if(error){
        return <p> {error} </p> 
     }  
 
     let count=0
    return (<div>
        <h3>Indicator facts</h3>

        <p>Belongs to the following groups of indicators</p>

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
        {data.indicatorGroups.indicatorGroups.map((group)=>{
            count++
            return  (<IndicatorGroupRow key={group.id} no={count} name={group.displayName} code={group.id} indicators={group.indicators} />)
        })}
        
        
    </TableBody>
    
</DataTable>
        </div>

    </div>)
}

export default IndicatorFacts