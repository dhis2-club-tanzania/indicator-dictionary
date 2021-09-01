import TopBar from "./Module/TopBar";


export default function Index(){


    //this is the piece of code just oncomment it when intergrating to scorecard
    // const dataSources = useRecoilValue(DataSourceState)
    // console.log(dataSources)
    //
    // const dataSourceArray=dataSources.map((dt)=>{
    //     return dt.id
    // })



    return (   <TopBar dataSources={[
        // "Uvn6LCg7dVU",
        "qfxEYY9xAl6",
        "GSae40Fyppf",
        "llyWs0I4ZtI",
        "tUdBD1JDxpn",
        "qrur9Dvnyt5",
        "fbfJHSPpUQD",
        "vJSPn2R6gVe",
        "Vk1tzSQxvOR",
        "OdiHJayrsKo"
    ]} />)
}