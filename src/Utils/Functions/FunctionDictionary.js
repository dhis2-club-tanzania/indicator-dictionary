const query={

    functions:{
        resource: 'dataStore/functions',
        id: ({id})=>id,
    }
}


export async function getFunctionDetails(engine,arr){
    let allPromises = arr?.map((id) => {
        return new Promise((resolve, reject) => {
            resolve(getDetails(engine, id))
        })
    })
    return await Promise.all(allPromises).then(value => {
        return value.map((val, index) => {
            return val
        })
    })
}

async function getDetails(engine,id){
    const data=await engine.query(query,{variables:{id}})
    return data?.functions
}
