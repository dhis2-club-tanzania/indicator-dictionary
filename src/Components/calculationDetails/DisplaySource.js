


export default function DisplaySource (props){

    const title=props.title;
    const data=props.data;

     return <>
        <h5>{title}</h5>
        <ol>
            {data.map((el)=>{
                return <li key={(el.id)}>{el.val}</li>
            })}
        </ol>
    </>
}