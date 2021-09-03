import {atom} from "recoil";

export const indicatorGroupDataSets=atom({
    key:"indicatorGroupDataSetCount",
    default:[]
})

export const indicatorGroupPrograms=atom({
    key:"indicatorGroupProgramCount",
    default:[]
})

export const indicatorGroupProgramDataElements=atom({
    key:"programDataElements",
    default:[]
})