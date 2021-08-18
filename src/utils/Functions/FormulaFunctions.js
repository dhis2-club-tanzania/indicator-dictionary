

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
