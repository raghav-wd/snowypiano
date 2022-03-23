import { RootState } from "../../types";

interface Action {
    type: string,
    payload: RootState,
}

// type ClefConfigAction = {
//     type: string,
//     payload: ClefConfig
// }

export type { Action }