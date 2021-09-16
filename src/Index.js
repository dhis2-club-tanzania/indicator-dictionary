
import React, {useRef} from 'react'
import ChipsSection from "./Module/ChipsSection/ChipsSection";
import TopSection from "./Module/TopSection/Components/OtherMetaData/Index";
import {useReactToPrint} from "react-to-print";


export default function Index(){


    const componentRef = useRef();

    const handlePrint=useReactToPrint({
        content:()=>componentRef.current
    })

    return ( <div>
         <TopSection handlePrint={handlePrint} />
            <ChipsSection componentRef={componentRef}  />
    </div>

    )
}