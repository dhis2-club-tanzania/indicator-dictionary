import Introduction from "./Components/introduction/introduction";
import DataSource from "./Components/DataSource/dataSource";
import Facts from "./Components/Facts";
import AnalyticsDetails from "./Components/AnalyticsDetails";


export default function DataElementPage(props){
    const id=props.id


    return (<div style={{display:"flex",flexDirection:"column"}}>
        {/*<Introduction id={id} />*/}

        {/*    <DataSource id={id}  />*/}

            {/*<Facts  id={id}  />*/}
            <AnalyticsDetails id={id}/>
    </div>
    )

}