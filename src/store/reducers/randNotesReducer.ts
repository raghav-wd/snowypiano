import { NotePositionType } from '../../types'
import { RandNoteAction } from '../actions'

const initialState: NotePositionType[] = []

const reducer =  (state: NotePositionType[] = initialState, action: RandNoteAction) => {
    switch(action.type) {
        case "light": {
            let notes = [...state, ...action.payload]
            if(notes.length > 12) {
                notes.shift()
                notes = notes.map(noteItem => ({...noteItem, col: noteItem.col - 1}))
            }
            return notes
        }
        case "wrong": {
            state[0] = {...state[0], class: 'animate-[wiggle_0.15s_ease-in]'}
            return state
        }
        default: {
            return state
        }
    }
}

export default reducer