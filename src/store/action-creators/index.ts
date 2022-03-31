import { Dispatch } from "redux"
import { Theme, themes, ThemeTitles } from "../../assets/data/themes"
import { NotePositionType, RootState } from "../../types"
import { Action, RandNoteAction } from "../actions/index"

export const changeTheme = (theme: ThemeTitles) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'changeTheme',
            payload: theme,
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