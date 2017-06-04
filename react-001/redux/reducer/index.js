//为了合并响应
import todos from "./todo";
import visibilityFilter from "./visibilityFilter";
import { combineReducers } from "redux";

const todoAPP = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
