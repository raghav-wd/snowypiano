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
            const id = state[0].uuid
            return state.map(i => {
                if(i.uuid == id)
                    return {...i, class: 'animate-[wiggle_0.15s_ease-in]'}
                return i
            })
        }
        case 'resetClass': {
            const id = state[0].uuid
            return state.map(i => {
                if(i.uuid == id)
                    return {...i, class: ''}
                return i
            })
        }
        default: {
            return state
        }
    }
}

export default reducer