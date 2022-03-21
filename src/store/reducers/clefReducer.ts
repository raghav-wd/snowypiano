import { ClefConfig } from "../../types"
import { Action } from "../actions"


const initialState: ClefConfig = {
    notationSize: 48,
    lineSpace: 48,
    lineThinkness: 2
}

const reducer =  (state: ClefConfig = initialState, action: Action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default reducer