import { combineReducers } from "redux"
// import clefReducer from "./clefReducer"
import rootReducer from "./rootReducer"

export const reducers = combineReducers({
    root: rootReducer,
})

export type State = ReturnType<typeof reducers>