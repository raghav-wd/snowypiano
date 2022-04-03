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

export const resetClass = () => {
    return (dispatch: Dispatch<RandNoteAction>) => {
        dispatch({
            type: 'resetClass',
            payload: [],
        })
    }
}

export const visualizer = () => {
    return (dispatch: Dispatch<RandNoteAction>) => {
        dispatch({
            type: 'visualizer',
            payload: [],
        })
    }
}

export const setVisualizerNoteStateOn = (index: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'setVisualizerNoteStateOn',
            payload: index
        })
    }
}

export const setVisualizerNoteStateOff = (index: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'setVisualizerNoteStateOff',
            payload: index
        })
    }
}