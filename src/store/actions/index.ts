import { NotePositionType, RootState } from '../../types'

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

// type ClefConfigAction = {
//     type: string,
//     payload: ClefConfig
// }

export type { Action, RandNoteAction, VisualizerPayload }
