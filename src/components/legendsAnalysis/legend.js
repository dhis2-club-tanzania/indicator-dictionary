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


function Legend(){



    return (
        <div>
             <p>
          {/* {{legendName1}}  */}
          spread accross
          {/* {{countOfClasses}} */}
            classes of for analysis
          </p>
        
          <DataTable>
    <TableHead>
        <DataTableRow>
            <DataTableColumnHeader>
                Class
            </DataTableColumnHeader>
            <DataTableColumnHeader>
               Upper
            </DataTableColumnHeader>
            <DataTableColumnHeader>
              Lower
            </DataTableColumnHeader>
            <DataTableColumnHeader>
                Color
            </DataTableColumnHeader>
        </DataTableRow>
    </TableHead>
    <TableBody>
        <DataTableRow>
            <DataTableCell>
                Class Data
            </DataTableCell>
            <DataTableCell>
               Upper Data
            </DataTableCell>
            <DataTableCell>
                Lower Data
            </DataTableCell>
            <DataTableCell>
                Color Data
            </DataTableCell>
        </DataTableRow>
        
    </TableBody>
    
</DataTable>  
        </div>
    );
}


export default Legend