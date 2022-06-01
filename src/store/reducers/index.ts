import { combineReducers } from 'redux'
// import clefReducer from "./clefReducer"
import randNotesReducer from './randNotesReducer'
import layoutReducer from './layoutReducer'
import rootReducer from './rootReducer'
import trackerReducer from './trackerReducer'
import visualizerReducer from './visualizerReducer'

export const reducers = combineReducers({
  layout: layoutReducer,
  randNotes: randNotesReducer,
  root: rootReducer,
  tracker: trackerReducer,
  visualizerNotes: visualizerReducer,
})

export type State = ReturnType<typeof reducers>
