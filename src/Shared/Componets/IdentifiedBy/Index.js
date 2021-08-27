import React from "react";
import PropTypes from "prop-types";
import Introduction from "../../../Module/ProgramIndicator/Components/Introduction";


export default function IdentifiedBy(props){

    const href=props?.href;
    const id=props?.id;

    return <div>
        Identified by: <i> <a style={{textDecoration:"none"}} href={href +".json"} target={"_blank"} >{id}</a> </i>
    </div>
}


IdentifiedBy.PropTypes={
    id:PropTypes.string.isRequired,
    href:PropTypes.string.isRequired
}