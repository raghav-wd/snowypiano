import { Dispatch } from "redux"
import { NotePositionType, RootState } from "../../types"
import { Action, RandNoteAction } from "../actions/index"

export const changeTheme = (rootState: RootState) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'light',
            payload: rootState,
        })
    }
}

export const addNote = (randNote: NotePositionType[]) => {
    return (dispatch: Dispatch<RandNoteAction>) => {
        dispatch({
            type: 'light',
            payload: randNote,
        })
    }
}

export const wrongNote = (randNote: NotePositionType[]) => {
    return (dispatch: Dispatch<RandNoteAction>) => {
        dispatch({
            type: 'wrong',
            payload: randNote,
        })
    }
}