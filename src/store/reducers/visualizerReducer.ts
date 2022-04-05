import { VisualizerNoteState } from '../../types'
import { getRandomColor } from '../../helpers/getRandomColor'
import { Action } from '../actions'

const initialState: VisualizerNoteState[] = getBoolArray()

const reducer = (state: VisualizerNoteState[] = initialState, action: Action) => {
  switch (action.type) {
    case 'setVisualizerNoteStateOn':
      return state.map((item, i) => {
        if (i == action.payload) return { ...item, isActive: true }
        return item
      })
    case 'setVisualizerNoteStateOff':
      return state.map((item, i) => {
        if (i == action.payload) return { ...item, isActive: false }
        return item
      })
    default:
      return state
  }
}

function getBoolArray() {
  const arr: VisualizerNoteState[] = []
  for (let i = 0; i < 88; i++) {
    const obj: VisualizerNoteState = {
      color: getRandomColor(),
      isActive: false,
    }
    arr.push(obj)
  }
  return arr
}

export default reducer
