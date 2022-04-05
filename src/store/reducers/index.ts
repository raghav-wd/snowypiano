import { combineReducers } from 'redux'
// import clefReducer from "./clefReducer"
import rootReducer from './rootReducer'
import visualizerReducer from './visualizerReducer'
import randNotesReducer from './randNotesReducer'

export const reducers = combineReducers({
  root: rootReducer,
  randNotes: randNotesReducer,
  visualizerNotes: visualizerReducer,
})

export type State = ReturnType<typeof reducers>
