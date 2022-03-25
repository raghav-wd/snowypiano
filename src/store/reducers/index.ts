import { combineReducers } from "redux"
// import clefReducer from "./clefReducer"
import rootReducer from './rootReducer'
import randNotesReduces from './randNotesReducer'

export const reducers = combineReducers({
    root: rootReducer,
    randNotes: randNotesReduces
})

export type State = ReturnType<typeof reducers>