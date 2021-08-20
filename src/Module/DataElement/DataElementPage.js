import Introduction from "./Components/introduction/introduction";


export default function DataElementPage(props){
    const id=props.id


    return (<div style={{display:"flex",flexDirection:"column"}}>
        <Introduction id={id} />

    </div>
    )

}