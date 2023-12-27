import { reducer } from "./reducer";
import { legacy_createStore } from "redux";

const initState={
    TodoArr:[],
    isLoading:false,
    isError:false
}

export const store=legacy_createStore(reducer,initState)