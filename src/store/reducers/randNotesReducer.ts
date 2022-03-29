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
            // return [...state, ...action.payload].splice(Math.max([...state, ...action.payload].length - 12, 0))
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