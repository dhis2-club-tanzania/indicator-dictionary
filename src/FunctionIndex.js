import React from 'react'
import {

    useParams
} from "react-router-dom";
import AllFunctions from "./Module/TopSection/Components/AllFunctions/AllFunctions";
import FunctionSelector from "./Module/TopSection/Components/AllFunctions/Components/FunctionSelector";
export default function FunctionIndex(){



    let { id } = useParams();

    //use selector to get the particular rule and function body from the store atom with all the functions


    return <div>
        <AllFunctions selected={id} />
        <FunctionSelector />
    </div>


}
