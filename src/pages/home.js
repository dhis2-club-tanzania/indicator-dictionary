import { Menu,MenuItem,CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'

import { useHistory } from "react-router-dom";

import TopBar from "../Components/TopBar/index"

import {useSetRecoilState} from "recoil";
import {dataElementsStateDictionary, programIndicatorStateDictionary} from "../store";


const query = {
    indicators: {
        resource: 'indicators',
        params: {
            fields: 'id,displayName',
        },paging:false,
    },
}
const query2={
    dataElements:{
        resource: "dataElements",
        params:{
            fields: 'id,displayName',
        },paging:false,
    }
}

function HomePage(){

   const history = useHistory();

    // const {loading, error, data}   = useDataQuery(query)
    const {loading, error, data}   = useDataQuery(query2)

    const updateDataElementHandler=useSetRecoilState(dataElementsStateDictionary)
    const updateProgramIndicatorHandler= useSetRecoilState(programIndicatorStateDictionary)
    const updateDataSetReportingRatesHandler= useSetRecoilState(programIndicatorStateDictionary)

    function navigateToIndicatorHandler(id){
        updateDataElementHandler([])
        updateProgramIndicatorHandler([])
        updateDataSetReportingRatesHandler([])
        history.push("/indicator/"+id);
    }

    if(loading){
       return <CircularLoader />
    }


    if(error){
       return <p> {error} </p> 
    }



    return(<div>

        <TopBar dataSources={["U4t3B3oUp71","Tt5TAvdfdVK","kVOiLDV4OC6"]} />
       
        <p> <b>Select an Data for details </b></p>

        {/*{for data indicator dictionary}*/}
        {/*    <Menu>*/}

        {/*    {data.indicators.indicators.map( (ind)=>{*/}
        {/*            return(*/}
        {/*           */}
        {/*                <MenuItem key={ind.id} onClick={()=>navigateToIndicatorHandler(ind.id)} label={ind.displayName} />*/}

        {/*            )*/}
        {/*        } )}*/}
        {/*    </Menu>*/}


        {/*{for data Element indicator dictionary}*/}

        {/*<Menu>*/}

        {/*    {data.dataElements.dataElements.map( (dt)=>{*/}
        {/*        return(*/}

        {/*            <MenuItem key={dt.id} onClick={()=>navigateToIndicatorHandler(dt.id)} label={dt.displayName} />*/}

        {/*        )*/}
        {/*    } )}*/}
        {/*</Menu>*/}

    </div>)
}

export default HomePage;