import { LayoutStateType, NotePositionType, RootState } from '../../types'
import { LayoutActionType } from '../action-types'

interface Action {
  type: string
  payload: any
}

type VisualizerPayload = {
  index: number
  isActive: boolean
}

interface RandNoteAction {
  type: string
  payload: NotePositionType[]
}

interface LayoutAction {
  type: LayoutActionType
  payload: boolean
}

export type { Action, RandNoteAction, VisualizerPayload, LayoutAction }
