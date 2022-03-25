import { NotePositionType } from '../../types'
import { RandNoteAction } from '../actions'

const initialState: NotePositionType[] = []

const reducer =  (state: NotePositionType[] = initialState, action: RandNoteAction) => {
    switch(action.type) {
        case "light":
            return [...state, ...action.payload]
        default: {
            return state
        }
    }
}

const randomNote = (col: number) => {
    const row = Math.round(Math.random() * 16)
    return {row, col}
}

export default reducer