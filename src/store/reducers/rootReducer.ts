import { themes, ThemeTitles } from "../../assets/data/themes"
import { RootState } from "../../types"
import { Action } from "../actions"

const initialTheme = {
        title: ThemeTitles.Light,
        primary: 'white',
        secondary: 'black',
        tertiary: 'gray',
        note: 'black',
        ledger: 'black',
        cleffLine: 'black',
        cleff: 'white',
    }
const initialState: RootState = {
    theme: {
        id: 1,
        name: initialTheme.title,
        primary: 'white',
        secondary: 'black',
        primaryText: 'black',
        secondaryText: 'white',
        ledger: {
            color: initialTheme.ledger,
            length: 64,
            thickness: 4,
        },
        note: {
            color: initialTheme.note,
            size: 48
        },
        clef: {
            size: 0,
            lineSpace: 48,
            lineThinkness: 2,
            color: initialTheme.cleff,
            lineColor: initialTheme.cleffLine,
        },
        visualizer: {
            color: initialTheme.primary,
        },
        footer: {
            color: initialTheme.primary,
            textColor: initialTheme.secondary
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
        case 'changeTheme':
            {
                const theme = themes.find(i => i.title == action.payload)
                return {...state, theme: {...state.theme, primary: theme!.primary, secondary: theme!.secondary, primaryText: theme!.primaryText, secondaryText: theme!.secondaryText, note: {... state.theme.note, color: theme!.note}, clef: {...state.theme.clef, color: theme!.cleff, lineColor: theme!.cleffLine}, footer: {...state.theme.footer, color: theme!.primary}}}
            }
        default:
            return state
    }
}

export default reducer