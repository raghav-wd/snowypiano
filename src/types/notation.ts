import React from 'react'

export type Ledger = {
  color: string
  length: number
  thickness: number
}

export type NoteType = {
  color: React.CSSProperties
  size: number
}

export type ClefType = {
  size: number
  lineSpace: number
  lineThinkness: number
  color: React.CSSProperties
}

export type colorScheme = {
  primary: string
  secondary: string
}
