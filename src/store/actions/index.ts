import { ClefConfig, ThemeState } from "../../types";

interface Action {
    type: string,
    payload: ThemeState,
}

type ClefConfigAction = {
    type: string,
    payload: ClefConfig
}

export type { Action, ClefConfigAction }