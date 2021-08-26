import {getValueDataSourcePromise} from "./FormulaFunctions";
import {dataSourceTypes} from "../Models";

export default function IdentifiableObjectDataSource(engine,arrId){ //returns array of promises
    return arrId.map((id)=>{
        return getValueDataSourcePromise(engine,id)
    })
}


export function getDataSourceType(formula){

    if(formula?.search("dataElements")>=0){
        return dataSourceTypes.DATA_ELEMENT
    }
    if(formula?.search("indicators")>=0){
        return dataSourceTypes.INDICATOR
    }
    if(formula?.search("programIndicators")>=0){
        return dataSourceTypes.PROGRAM_INDICATOR
    }


}

export function displayNameLength(name){
    if(name.length>18){
        return name.substr(0,16)+"..."
    }else{
        return name;
    }

}