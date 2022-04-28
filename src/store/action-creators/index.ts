import { Dispatch } from 'redux'
import { Theme, themes, ThemeTitles } from '../../assets/data/themes'
import { LayoutStateType, NotePositionType, NoteLog, RootState } from '../../types'
import { LayoutActionType, TrackerActionType } from '../action-types'
import { Action, LayoutAction, RandNoteAction, TrackerAction } from '../actions/index'

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
      payload: index,
    })
  }
}

export const setVisualizerNoteStateOff = (index: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: 'setVisualizerNoteStateOff',
      payload: index,
    })
  }
}

export const setHideVisualizer = (index: boolean) => {
  return (dispatch: Dispatch<LayoutAction>) => {
    dispatch({
      type: LayoutActionType.hideVisualizer,
      payload: index,
    })
  }
}

export const setHideStaff = (index: boolean) => {
  return (dispatch: Dispatch<LayoutAction>) => {
    dispatch({
      type: LayoutActionType.hideStaff,
      payload: index,
    })
  }
}

export const setShowAll = (index: boolean) => {
  return (dispatch: Dispatch<LayoutAction>) => {
    dispatch({
      type: LayoutActionType.showAll,
      payload: index,
    })
  }
}

export const log = (index: NoteLog) => {
  return (dispatch: Dispatch<TrackerAction>) => {
    dispatch({
      type: TrackerActionType.log,
      payload: index,
    })
  }
}
