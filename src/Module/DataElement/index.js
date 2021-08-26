import Introduction from "./Components/introduction/introduction";
import DataSource from "./Components/DataSource/dataSource";
import Facts from "./Components/Facts";
import AnalyticsDetails from "./Components/AnalyticsDetails";
import RelatedIndicator from "./Components/RelatedIndicator";
import AccesibilityAndSharing from "../../Shared/Componets/AccesibilityAndSharing";


export default function DataElementPage(props){
    const id=props.id


    return (<div style={{display:"flex",flexDirection:"column"}}>
            <Introduction id={id} />

            <DataSource id={id}  />

            <Facts  id={id}  />
            <AnalyticsDetails id={id}/>
            <RelatedIndicator id={id} />

            <AccesibilityAndSharing id={id} resourceType={"dataElements"} />

    </div>
    )

}