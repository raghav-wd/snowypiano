export enum ThemeTitles {
    Light = 'Light',
    Dark = 'Dark',
    Blue_Dark = 'Blue_Dark',
}

export type Theme = {
    title: ThemeTitles
    primary: string
    secondary: string
    primaryText: string
    secondaryText: string
    tertiary: string
    note: string
    ledger: string
    cleffLine: string
    cleff: string
}

export const themes: Theme[] = [
     {
        title: ThemeTitles.Light,
        primary: 'white',
        secondary: 'black',
        primaryText: 'black',
        secondaryText: 'white',
        tertiary: 'gray',
        note: 'black',
        ledger: 'black',
        cleffLine: 'black',
        cleff: 'white',
    },
    {
        title: ThemeTitles.Dark,
        primary: '#121212',
        secondary: 'white',
        primaryText: 'white',
        secondaryText: '#121212',
        tertiary: 'gray',
        note: 'white',
        ledger: 'white',
        cleffLine: 'white',
        cleff: '#121212',
    },
    {
        title: ThemeTitles.Blue_Dark,
        primary: '#364F6B',
        secondary: '#364F6B',
        primaryText: '#3FC1C9',
        secondaryText: '#3FC1C9',
        tertiary: 'gray',
        note: '#3FC1C9',
        ledger: '#3FC1C9',
        cleffLine: '#3FC1C9',
        cleff: '#364F6B',
    }
]
