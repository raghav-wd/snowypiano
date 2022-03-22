import { combineReducers } from "redux"
import clefReducer from "./clefReducer"
import themeReducer from "./themeReducer"

export const reducers = combineReducers({
    theme: themeReducer,
    clefConfig: clefReducer
})

export type State = ReturnType<typeof reducers>