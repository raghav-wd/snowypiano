import { NoteLog, NotePositionType } from '../../types'
import { LayoutActionType, TrackerActionType } from '../action-types'

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

interface TrackerAction {
  type: TrackerActionType
  payload: NoteLog
}

export type { Action, RandNoteAction, VisualizerPayload, LayoutAction, TrackerAction }
