import { RootState } from "../../types"
import { Action } from "../actions"


const initialState: RootState = {
    theme: {
        id: 1,
        name: "default",
        ledger: {
            color: "black",
            length: 64,
            thickness: 4,
        },
        note: {
            color: 'black',
            size: 32
        },
        clef: {
            size: 0,
            lineSpace: 32,
            lineThinkness: 2,
            lineColor: 'black',
            color: 'white'
        },
        visualizer: {
            color: 'black',
        }
    },
    appConfig: {
        staff: 0,
        visualizer: 0
    },
    id: 1
}

const reducer =  (state: RootState = initialState, action: Action) => {
    switch(action.type) {
        case "light":
            return state
        case "dark":
            return state
        default:
            return state
    }
}

export default reducer