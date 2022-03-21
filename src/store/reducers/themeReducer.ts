import { ThemeState } from "../../types"
import { Action } from "../actions"


const initialState: ThemeState = {
    notation: '#fff',
    line: '#789395',
    clef: '#B4CFB0',
}

const reducer =  (state: ThemeState = initialState, action: Action) => {
    switch(action.type) {
        case "light":
            return action.payload
        case "dark":
            return action.payload
        default:
            return state
    }
}

export default reducer