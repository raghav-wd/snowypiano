import { NotePositionType } from '../../types'
import { Action, VisualizerPayload } from '../actions'

const initialState: boolean[] = getBoolArray()

const reducer =  (state: boolean[] = initialState, action: Action) => {
    switch(action.type) {
        case 'setVisualizerNoteStateOn':
            return state.map((_, i) => {
                if(i == action.payload) return true
            })
        default: {
            return state
        }
    }
}

function getBoolArray() {
    const arr:boolean[] = []
    for(let i = 0; i<88; i++)
        arr.push(false)
    return arr
}

export default reducer