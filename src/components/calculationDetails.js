import {
    DataTable,    DataTableToolbar,    DataTableHead,    TableHead,    DataTableBody,    TableBody,    DataTableFoot,    DataTableRow,    DataTableCell,    DataTableColumnHeader,
} from '@dhis2/ui'
import { CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'


function CalculationDetails(props){

    const id=props.id


  const query = {
    calculation:{
      resource:"indicators",
         id,
        params:{
          fields:["numerator","denominator"]
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

 const numDen=data.calculation


    return (<div>
       <h3> Calculation details</h3>
   <p> Below are expression computing numerator and denominator, and related sources </p>

   <DataTable>
    <TableHead>
        <DataTableRow>
            <DataTableColumnHeader>
                Expression
            </DataTableColumnHeader>
            <DataTableColumnHeader>
               Formula
            </DataTableColumnHeader>
            <DataTableColumnHeader>
             Sources
            </DataTableColumnHeader>
          
        </DataTableRow>
    </TableHead>
    <TableBody>
        <DataTableRow>
            <DataTableCell bordered>
               Numerator
            </DataTableCell  >
            <DataTableCell bordered>
                {numDen.numerator}
            </DataTableCell>
            <DataTableCell bordered>
             Numerator Sorces
            </DataTableCell>
           
        </DataTableRow>
        <DataTableRow>
            <DataTableCell bordered >
               Denominator
            </DataTableCell>
            <DataTableCell bordered>
            {numDen.denominator}
            </DataTableCell>
            <DataTableCell bordered>
            Denominator Sorces
            </DataTableCell>
           
        </DataTableRow>
        
    </TableBody>
    
</DataTable>  

    </div>)
}


export default CalculationDetails
