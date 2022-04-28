import { TrackerState, VisualizerNoteState } from '../../types'
import { getRandomColor } from '../../helpers/getRandomColor'
import { Action } from '../actions'
import { TrackerActionType } from '../action-types'

const initialState: TrackerState = {
    misses: 0,
    hits: 0,
}

const reducer = (state: TrackerState = initialState, action: Action) => {
  switch (action.type) {
    case TrackerActionType.log:
      return state
    default:
      return state
  }
}

export default reducer
