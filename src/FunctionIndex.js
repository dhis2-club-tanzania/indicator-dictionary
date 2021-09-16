import React, {useRef} from 'react'
import {

    useParams
} from "react-router-dom";
import AllFunctions from "./Module/TopSection/Components/Functions/AllFunctions";
import FunctionSelector from "./Module/TopSection/Components/Functions/Components/FunctionSelector";
import _ from "lodash";
import SearchComponent from "./Module/TopSection/Components/Functions/Components/SearchComponent";
import DisplaySearchResult from "./Module/TopSection/Components/Functions/Components/DisplaySearchResult";
import {useReactToPrint} from "react-to-print";
export default function FunctionIndex(){

    let { id } = useParams();

    //use selector to get the particular rule and function body from the store atom with all the functions

    const componentRef = useRef();

    const handlePrint=useReactToPrint({

        content:()=>componentRef.current
    })


    return <div>
         <SearchComponent handlePrint={handlePrint} />
        <DisplaySearchResult />
        <AllFunctions selected={id} />
        <FunctionSelector componentRef={componentRef} />
    </div>


}
