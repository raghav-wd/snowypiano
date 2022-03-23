import { Dispatch } from "redux"
import { RootState } from "../../types"
import { Action } from "../actions/index"

export const changeTheme = (rootState: RootState) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'light',
            payload: rootState,
        })
    }
}

// export const changeClefConfig = (clefConfig: ClefConfig) => {
//     return (dispatch: Dispatch<ClefConfigAction>) => {
//         dispatch({
//             type: ClefConfigActionType.DEFAULT,
//             payload: clefConfig,
//         })
//     }
// }