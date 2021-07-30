
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

function DataElementSIndicator(){

    return (<div>
       <h3> Data elements in indicator </h3>
        <p> The following is the summary of the data elements used in calculations:</p>

        <DataTable>
            <TableHead>
                <DataTableRow>
                    <DataTableColumnHeader bordered>
                    Data Element
                    </DataTableColumnHeader>
                    <DataTableColumnHeader bordered>
                    Expression part (Numerator/ Denominator)
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                    Value Type
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                    Zero Significance
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                    Categories
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                    Datasets/ Programs
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                    Groups
                    </DataTableColumnHeader>          
                
                </DataTableRow>
            </TableHead>
            <TableBody>
                <DataTableRow>
                    <DataTableCell bordered>
                   
                    </DataTableCell  >
                    <DataTableCell bordered>
                       
                    </DataTableCell>
                    <DataTableCell bordered>
                    
                    </DataTableCell>
                    <DataTableCell bordered>
                   
                    </DataTableCell  >
                    <DataTableCell bordered>
                       
                    </DataTableCell>
                    <DataTableCell bordered>
                    
                    </DataTableCell>
                    <DataTableCell bordered>
                       
                       </DataTableCell>
                       
                
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell bordered >
                   
                    </DataTableCell>
                    <DataTableCell bordered>
                   
                    </DataTableCell>
                    <DataTableCell bordered>
                    </DataTableCell>
                    <DataTableCell bordered >
                   
                   </DataTableCell>
                   <DataTableCell bordered>
                  
                   </DataTableCell>
                   <DataTableCell bordered>
                   </DataTableCell>
                   <DataTableCell bordered>
                  
                   </DataTableCell>
                   
                </DataTableRow>
                
            </TableBody>
            
        </DataTable>  


    </div>)
}

export default DataElementSIndicator