export type ThemeState = {
    notation: string
    line: string
    clef: string
    ledger?: LedgerConfig
    note: NoteConfig
    clefc: ClefConfig
}

export type LedgerConfig = {
    color: string,
    length: number,
    thickness: number,
}

export type NoteConfig = {
    color: string,
    size: number,
}

export type ClefConfig = {
    notationSize: number,
    lineSpace: number,
    lineThinkness: number,
}