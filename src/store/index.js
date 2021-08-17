import {atom} from "recoil";

export const dataElementsStateDictionary = atom({
    key: 'dataElementsStoreDictionary', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});

export const programIndicatorStateDictionary=atom({
    key:'programIndicatorStateDictionary',
    default:[]
})
