import React from 'react'
import Introduction from "./Components/Introduction";
import DataSource from "./Components/DataSource";
import Rules from "./Components/Rules";
import Facts from "./Components/Facts";
import ApiEndPoint from "./Components/ApiEndPoint";
import AccessibilityAndSharingFunction from "./Components/AccessibilityAndSharing";
import {functionDictionarySourceSelector} from "../../Store/FunctionDictionary";
import {useRecoilValue} from "recoil";


export default function FunctionPage({array}){

   const selectedFunction=useRecoilValue(functionDictionarySourceSelector)
    const selected=array[selectedFunction]

    return <div>
        <Introduction  />
        {/*<DataSource id={id} />*/}
        {/*<Rules id={id} />*/}
        {/*<Facts id={id} />*/}
        {/*<ApiEndPoint id={id} />*/}
        {/*<AccessibilityAndSharingFunction id={id}/>*/}
    </div>
}