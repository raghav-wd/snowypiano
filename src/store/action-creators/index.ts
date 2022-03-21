import { Dispatch } from "redux"
import { ThemeState } from "../../types"
import { Action } from "../actions/index"

export const changeTheme = (theme: ThemeState) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'light',
            payload: theme,
        })
    }
}