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

function CalculationDetails(){


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
                Numerator Formula
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
            Denominator Formula
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
