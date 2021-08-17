

import {DataTableRow, DataTableCell,} from '@dhis2/ui'
export  default function Row(props){
    const dataSet=props.dataSet
    console.log(dataSet)


    function OtherCells(dataSet){
        return <>
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

        </>
    }

    return <>
        <DataTableRow>
            <DataTableCell bordered>
                {dataSet?.val}
            </DataTableCell  >
            <DataTableCell bordered>
                {dataSet?.location}
            </DataTableCell>
            {OtherCells("Dataset")}
        </DataTableRow>
     </>
}