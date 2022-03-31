export enum ThemeTitles {
    Light = 'Light',
    Dark = 'Dark',
    Pink = 'Pink',
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
        primary: 'black',
        secondary: 'white',
        primaryText: 'white',
        secondaryText: 'black',
        tertiary: 'gray',
        note: 'white',
        ledger: 'white',
        cleffLine: 'white',
        cleff: 'black',
    },
    {
        title: ThemeTitles.Pink,
        primary: 'pink',
        secondary: 'white',
        primaryText: 'white',
        secondaryText: 'pink',
        tertiary: 'gray',
        note: 'black',
        ledger: 'black',
        cleffLine: 'black',
        cleff: 'pink',
    }
]
