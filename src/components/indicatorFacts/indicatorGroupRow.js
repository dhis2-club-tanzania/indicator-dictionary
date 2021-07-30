import { useHistory } from "react-router-dom";

import classes from './indicatorGroupRow.module.css'

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

function IndicatorGroupRow(props){

 function dispList(list){
    for(let ind=0;ind<list.length;ind++){
        return <li className={classes.indicatorRowLink} key={list[ind].id} onClick={()=>navigateToIndicatorHandler(list[ind].id)}>  {list[ind].displayName}
         
    </li>
    }
 }

    const history = useHistory();

    function navigateToIndicatorHandler(id){
       
        history.push("/indicator/"+id);
    }
console.log(props.indicators)


    return (<DataTableRow>
        <DataTableCell bordered>
           {props.no}
        </DataTableCell>
        <DataTableCell bordered>
           {props.name}
        </DataTableCell>
        <DataTableCell bordered>
           {props.code}
        </DataTableCell>
        <DataTableCell bordered>
            <ol>
                {dispList(props.indicators)}
            </ol>
            
        
           
        </DataTableCell>
    </DataTableRow>)
}

export default IndicatorGroupRow