import { ThemeState } from "../../types"
import { Action } from "../actions"


const initialState: ThemeState = {
    notation: '#fff',
    line: '#789395',
    clef: '#B4CFB0',
    ledger: {
        color: '#fff',
        length: 64,
        thickness: 4
    },
    note: {
        color: "black",
        size: 0
    },
    clefc: {
        notationSize: 0,
        lineSpace: 0,
        lineThinkness: 0
    }
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