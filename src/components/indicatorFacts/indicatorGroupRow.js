import { useHistory } from "react-router-dom";
import { useState } from "react";

import classes from './indicatorGroupRow.module.css'

import {  DataTableRow,    DataTableCell,    DataTableColumnHeader,    Button,} from '@dhis2/ui'

function IndicatorGroupRow(props){

 function dispList(list){
     let items;
    if(isListFull){ 
        items= list.map((ind)=>{
            return(<li className={classes.indicatorRowLink} onClick={()=>navigateToIndicatorHandler(ind.id)}> 
                     {ind.displayName}
                   </li>)
            }
            )
            
    }else{
     list=list.slice(0,3);  //just first three
     items= list.map((ind)=>{
          return(<li className={classes.indicatorRowLink} onClick={()=>navigateToIndicatorHandler(ind.id)}> 
                   {ind.displayName}
                 </li>)
      })
    }

    return items
 }


 function toogleIndicatorList(){
    isListFull ? setListFull(false) : setListFull(true)  
    dispList(sampleList)
 }


 const [isListFull,setListFull]=useState(false)

    const history = useHistory();

    function navigateToIndicatorHandler(id){
       
        history.push("/indicator/"+id);
    }


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
           {props.indicators.length>3 ?
            <Button name="Basic button" onClick={toogleIndicatorList} value="default">
                {isListFull? 'show less':'show more'}
             </Button>: null}
        
        </DataTableCell>
    </DataTableRow>)
}

export default IndicatorGroupRow