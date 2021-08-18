
const query1={
    dataElement:{
        resource:"dataElements",
        id: ({id})=>id,
        params:{
            fields:["id","displayName"]
        }
    },
    categoryOptionCombo:{
        resource:"categoryOptionCombos",
        id: ({idComb})=>idComb,
        params:{
            fields:["id","displayName"]
        }
    }
}
const query2={
    dataElement:{
        resource:"dataElements",
        id: ({id})=>id,
        params:{
            fields:["id","displayName"]
        }
    }
}
const query3={
    programIndicator:{
        resource:"programIndicators",
        id: ({id})=>id,
        params:{
            fields:["id","displayName"]
        }
    }
}
const query4={
    dataSets:{
        resource:"dataSets",
        id: ({id})=>id,
        params:{
            fields:["id","displayName"]
        }
    }
}

const query5={
    identifiableObjects:{
        resource:"identifiableObjects",
        id: ({id})=>id,
        params:{
            fields:["id","displayName"]
        }
    }
}

const query6={
    identifiableObjects:{
        resource:"identifiableObjects",
        id: ({id})=>id,
        params:{
            fields:["id","displayName"]
        }
    },
    identifiableObjects2:{
        resource:"identifiableObjects",
        id: ({id2})=>id2,
        params:{
            fields:["id","displayName"]
        }
    }
}


export function getFormulaSources(formula,sourceInitial){
    let ind1=0
    let ind2=0
    let arr=[]

    while(formula?.search(sourceInitial)>=0){//there is still a dataElement
        ind1=formula.indexOf(sourceInitial) //first occourance
        let subStr= formula.substr(ind1)
        ind2=subStr.indexOf("}")
        ind2=ind2+ind1

        let datEl = formula.substring(ind1+2,ind2);
        arr.push(datEl)

        formula= setCharAt(formula,ind1,"")         //remove {
        formula= setCharAt(formula,ind1-1,"")       //removes #
        formula=setCharAt(formula,ind2-2,"")          //removes }

    }

    if(sourceInitial==="R{"){
        let resultedArr=[]
        arr.filter((ele)=>{
            resultedArr.push(ele.split(".")[0])  //elements comes as BfMAe6Itzgt.REPORTING_RATE or OsPTWNqq26W.EXPECTED_REPORTS so we do this to just take the id
        })
        arr=resultedArr
    }

    return arr
}

export function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

 async function getValueDataElementOnly(engine,id){

    const data = await engine.query(query2,{variables: {id}})

    return [data?.dataElement?.displayName]
}

 async function getValueProgramIndicator(engine,id){
    const data = await engine.query(query3,{variables: {id}})
    return [data?.programIndicator?.displayName]
}

 async function getValueDataSetReportingRates(engine,id){
    const data=await engine.query(query4,{variables:{id}})
    return [data?.dataSets?.displayName]
}


 async function getValueDataElementOptionCombo(engine,id,idComb){
    const data= await engine.query(query1,{variables: {id,idComb}})
    return [data?.dataElement?.displayName, data?.categoryOptionCombo?.displayName]

}
async function getValueIdentifiableObjects2(engine,id,id2){
    const data= await engine.query(query6,{variables: {id,id2}})
    return [data?.identifiableObjects?.displayName, data?.identifiableObjects2.displayName]
}

async function getValueAttribute(engine,id){
    const data=await engine.query(query5,{variables:{id}})
    return [data?.attribute?.displayName]
}

async function getValueIdentifiableObjects(engine,id){
    const data=await engine.query(query5,{variables:{id}})
    return [data?.identifiableObjects?.displayName]
}



export function getValueFromApi(engine,id){

    if(isPureDataElement(id)){
        //fetch value normally
        return new Promise((resolve, reject) => {
            resolve(getValueIdentifiableObjects(engine,id))
        })
    }else{
        //break to array and just take first element
        return new Promise(((resolve, reject) => {
            let arr = id.split(".")
            resolve(getValueIdentifiableObjects2(engine,arr[0], arr[1]));
        }))
    }

    // if(type===0){ //dataElement
    //     if(isPureDataElement(id)){
    //         //fetch value normally
    //         return new Promise((resolve, reject) => {
    //             resolve(getValueDataElementOnly(engine,id))
    //         })
    //     }else{
    //         //break to array and just take first element
    //         return new Promise(((resolve, reject) => {
    //             let arr = id.split(".")
    //             resolve(getValueDataElementOptionCombo(engine,arr[0], arr[1]));
    //         }))
    //     }
    // }
    // if(type===1){//programIndicator
    //     return new Promise((resolve, reject) => {
    //         resolve(getValueProgramIndicator(engine,id))
    //     })
    // }
    // if(type===2){
    //     return new Promise((resolve, reject) => {
    //         resolve(getValueDataSetReportingRates(engine,id))
    //     })
    // }
    // if(type===3){
    //     return new Promise((resolve, reject) => {
    //         resolve(getValueAttribute(engine,id))
    //     })
    // }
    // if(type===4){//for identifiable objects
    //     if(isPureDataElement(id)){
    //         //fetch value normally
    //         return new Promise((resolve, reject) => {
    //             resolve(getValueIdentifiableObjects(engine,id))
    //         })
    //     }else{
    //         //break to array and just take first element
    //         return new Promise(((resolve, reject) => {
    //             let arr = id.split(".")
    //             resolve(getValueIdentifiableObjects2(engine,arr[0], arr[1]));
    //         }))
    //     }
    //
    // }
}

//
// export function extractAllFormulaSource(formula){
//     let arr= formula.split("{");
//     arr=arr.join("")
//     arr=arr.split("}")
//     arr=arr.slice(0,arr.length-1)
//     return arr
// }

function isPureDataElement(str){
    if(str.indexOf(".")==-1){ //didnt find
        return true
    }else{
        return false;
    }
}
