// export * from './state'
// export * from './notation'

export type RootState = {
    theme: ThemeState
    appConfig: AppConfigState
    id: number
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
    staff: 0
    visualizer?: 0
}

export type VisualizerState = {
    visibility: boolean
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


