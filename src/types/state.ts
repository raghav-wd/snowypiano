import React from "react"
import { Ledger } from "."
import { ClefType, NoteType } from "./notation"

export type RootState = {
    theme: ThemeState
    appConfig: AppConfigState
}


export type ThemeState = {
    id: number
    name: string
    ledger: Ledger
    note: NoteType
    clef: ClefType
    visualizer: Visualizer
}

export type AppConfigState = {
    staff: any
    visualizer?: VisualizerState
}

export type VisualizerState = {
    visibility: boolean
}

export type Visualizer = {
    color: React.CSSProperties
}