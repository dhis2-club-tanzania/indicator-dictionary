import {atom} from "recoil";

export const dataElementsState = atom({
    key: 'dataElementsStoreDictionary', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});
