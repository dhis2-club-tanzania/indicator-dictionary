
import React from 'react'
import ChipsSection from "./Module/ChipsSection/ChipsSection";
import TopSection from "./Module/TopSection/Index";


export default function Index(){


    //this is the piece of code just oncomment it when intergrating to scorecard
    // const dataSources = useRecoilValue(DataSourceState)
    // console.log(dataSources)
    //
    // const dataSourceArray=dataSources.map((dt)=>{
    //     return dt.id
    // })


    return ( <div>
        <TopSection />
            <ChipsSection  />
    </div>

    //     <ChipsSection dataSources={[
    //
    //     // "Aa66cBLsfmA"
    //     // "lQ0kni0meJZ.IhhA30Fk3hM",  //first part is function id . second is rule id
    //     // "lQ0kni0meJZ.I7OlIxEwv5h"
    //     //
    //     //
    //     // "a9jov6eXUIi.YAfyAqrVF2B",
    //     // "a9jov6eXUIi.SAxFbNuoj4w",
    //
    //     "Uvn6LCg7dVU",
    //     "hdHnxO1yHLg",
    //     "oehv9EO3vP7",
    //     "qfxEYY9xAl6",
    //     "GSae40Fyppf",
    //     "llyWs0I4ZtI",
    //     "tUdBD1JDxpn",
    //     "qrur9Dvnyt5",
    //     "fbfJHSPpUQD",
    //     "vJSPn2R6gVe",
    //     "Vk1tzSQxvOR",
    //     "U4t3B3oUp71",
    //     "OdiHJayrsKo",
    //
    // ]} />

    )
}