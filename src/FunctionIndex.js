import React from 'react'
import {

    useParams
} from "react-router-dom";
import AllFunctions from "./Module/TopSection/Components/AllFunctions/AllFunctions";
import FunctionSelector from "./Module/TopSection/Components/AllFunctions/Components/FunctionSelector";
import _ from "lodash";
import SearchComponent from "./Module/TopSection/Components/AllFunctions/Components/SearchComponent";
import DisplaySearchResult from "./Module/TopSection/Components/AllFunctions/Components/DisplaySearchResult";
export default function FunctionIndex(){



    let { id } = useParams();

    //use selector to get the particular rule and function body from the store atom with all the functions



    return <div>
         <SearchComponent />
        <DisplaySearchResult />
        <AllFunctions selected={id} />
        <FunctionSelector />
    </div>


}
