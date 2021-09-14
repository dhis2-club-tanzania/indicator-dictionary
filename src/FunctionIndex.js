import React from 'react'
import {

    useParams
} from "react-router-dom";
import AllFunctions from "./Module/TopSection/Components/AllFunctions/AllFunctions";
export default function FunctionIndex(){



    let { id } = useParams();

    if(id){
       return <p>one function detail</p>
    }else{
        return <AllFunctions />

    }

}
