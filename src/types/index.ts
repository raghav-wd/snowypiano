// export * from './state'
// export * from './notation'

import { LayoutActionType } from '../store/action-types'

export type RootState = {
  theme: ThemeState
  appConfig: AppConfigState
  id: number
}

export type ThemeState = {
  id: number
  name: string
  primary: string
  secondary: string
  // tertiary: string
  primaryText: string
  secondaryText: string
  texture?: string
  logoText?: string
  ledger: Ledger
  note: NoteType
  clef: ClefType
  visualizer: Visualizer
  footer: Footer
}

export type Footer = {
  color: string
  textColor: string
}

export type AppConfigState = {
  staff: 0
  visualizer?: 0
  hideHeader?: boolean
  hideStaff?: boolean
  hideVisualizer?: boolean
  hideFooter?: boolean
}

export type VisualizerState = {
  visibility: boolean
}

export type VisualizerNoteState = {
  color: string
  isActive: boolean
}

export type LayoutStateType = {
  mode: LayoutActionType
  header: boolean
  staff: boolean
  visualizer: boolean
  footer: boolean
}

export type TrackerState = {
  misses: number
  hits: number
  history?: NoteLog[]
}

export type NoteLog = {
  hit: boolean // played correctly or not
  note: string
  noteNumber: number
}

export type Visualizer = {
  color: string
}

export type Ledger = {
  color: string
  length: number
  thickness: number
}

export type NoteType = {
  color: string
  size: number
}

export type ClefType = {
  size: number
  lineSpace: number
  lineThinkness: number
  lineColor: string
  color: string
}

export type colorScheme = {
  primary: string
  secondary: string
}

export type NotePositionType = {
  col: number
  row: number
  uuid: string
  class: string
}
