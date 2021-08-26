import {getValueDataSourcePromise} from "./FormulaFunctions";
import {dataSourceTypes} from "../Models";

export default function IdentifiableObjectDataSource(engine,arrId){ //returns array of promises
    // let allPromises=[]
    return arrId.map((id)=>{
        return getValueDataSourcePromise(engine,id)
    })
    // for(let i=0;i<arrId?.length;i++){
    //     let proms=getValueDataSourcePromise(engine,arrId[i])
    //     allPromises.push(proms)
    // }

    // return allPromises

}


export function getDataSourceType(formula){

    if(formula?.search("dataElements")>=0){
        return dataSourceTypes.DATA_ELEMENT
    }
    if(formula?.search("indicators")>=0){
        return dataSourceTypes.INDICATOR
    }

}

export function displayNameLength(name){
    if(name.length>18){
        return name.substr(0,16)+"..."
    }else{
        return name;
    }

}