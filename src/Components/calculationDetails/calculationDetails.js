import {
    DataTable,    DataTableToolbar,    DataTableHead,    TableHead,    DataTableBody,    TableBody,    DataTableFoot,    DataTableRow,    DataTableCell,    DataTableColumnHeader,
} from '@dhis2/ui'
import { CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'
import CalculationDetailRow from './calculationDetailRow'
import { useEffect} from 'react'

const query = {
    calculation:{
      resource:"indicators",
       id: ({id})=>id,
        params:{
          fields:["numerator","denominator"]
        }
    }
  }


function CalculationDetails({id}){

    const {loading, error, data,refetch}  = useDataQuery(query, {variables: {id}})

    useEffect(()=>{refetch({id})},[id])

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
            <CalculationDetailRow formula={numDen.numerator} location="numerator" />
            {/*<CalculationDetailRow formula={"#{RF4VFVGdFRO.jOkIbJVhECg}"} location="numerator" />*/}

        </DataTableRow>
        <DataTableRow>
            <DataTableCell bordered >
               Denominator
            </DataTableCell>

            <CalculationDetailRow formula={numDen.denominator} location="denominator" />
           
        </DataTableRow>
        
    </TableBody>
    
</DataTable>  

    </div>)
}


export default CalculationDetails
