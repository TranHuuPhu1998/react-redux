import { combineReducers } from "redux";
import addTask from "./addTask";

const appReducers = combineReducers({
    addTask,

});

export default appReducers;
