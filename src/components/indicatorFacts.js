import {
    DataTable,
    DataTableToolbar,
    DataTableHead,
    DataTableBody,
    DataTableFoot,
    DataTableRow,
    DataTableCell,
    DataTableColumnHeader,
} from '@dhis2/ui'
import IndicatorGroupRow from './indicatorGroupRow'

function IndicatorFacts(){
    const det=[{"da":"dfas"}]

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
        {det.map((group)=>{
            return  (<IndicatorGroupRow no="1" name="name" code="code" indicators="indicatorsList" />)
        })}
        
        
    </TableBody>
    
</DataTable>
        </div>

    </div>)
}

export default IndicatorFacts