import { NotePositionType, RootState } from "../../types";

interface Action {
    type: string,
    payload: RootState | string,
}

interface RandNoteAction {
    type: string,
    payload: NotePositionType[]
}

// type ClefConfigAction = {
//     type: string,
//     payload: ClefConfig
// }

export type { Action, RandNoteAction }