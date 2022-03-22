import { Dispatch } from "redux"
import { ClefConfig, ThemeState } from "../../types"
import { ClefConfigActionType } from "../action-types"
import { Action, ClefConfigAction } from "../actions/index"

export const changeTheme = (theme: ThemeState) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'light',
            payload: theme,
        })
    }
}

export const changeClefConfig = (clefConfig: ClefConfig) => {
    return (dispatch: Dispatch<ClefConfigAction>) => {
        dispatch({
            type: ClefConfigActionType.DEFAULT,
            payload: clefConfig,
        })
    }
}