import {atom} from "recoil";

export const indicatorGroupDataSets=atom({
    key:"indicatorGroupDataSetCount",
    default:[]
})

export const indicatorGroupPrograms=atom({
    key:"indicatorGroupProgramCount",
    default:[]
})

export const programDataElements=atom({
    key:"programDataElements",
    default:[]
})