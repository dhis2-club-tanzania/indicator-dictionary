import {dataSourceTypes} from "../../../utils/Models";
import IndicatorPage from "../../../pages/IndicatorPage";
import DataElementPage from "../../../pages/DataElementPage";


export default function DataSourceSelector(props){

    const type=props.type
    const id=props.id;

    if(type===dataSourceTypes.INDICATOR){

        return  <IndicatorPage id={id} />
    }
    if(type===dataSourceTypes.DATA_ELEMENT){
        // return <DataElementPage  id={id} />
    }


    return <></>


}