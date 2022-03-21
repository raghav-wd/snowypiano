import { ThemeState } from "../../types";

interface Action {
    type: string,
    payload: ThemeState,
}

export type { Action }