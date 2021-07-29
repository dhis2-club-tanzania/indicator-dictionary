import { useHistory } from "react-router-dom";

function IndicatorGroupRow(props){

 
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
                {props.indicators.map((ind)=>{
                    <li  key={ind.id} onClick={()=>navigateToIndicatorHandler(ind.id)}>
                        {ind.displayName}
                    </li>
                })}  
            </ol>
           
        </DataTableCell>
    </DataTableRow>)
}

export default IndicatorGroupRow