import CalculationDetails from "./calculationDetails";
import PropTypes from "prop-types";


export default function DisplaySource (props){

    const title=props.title;
    const data=props.data;

     return <>

         <h5>{title}</h5>

         <ul>
             {data.map((el)=>{
                 return <li key={el.id}>
                     <h6>{el.val}</h6>
                     <ol>
                         {el.sources.map((src)=>{
                            return <li key={src.dataSet.id}>{src.dataSet.displayName}</li>
                         })}
                     </ol>
                 </li>
             })}
         </ul>


    </>
}


DisplaySource.prototype={
    id:PropTypes.string.isRequired
}