export enum ThemeTitles {
  Light = 'Light',
  Dark = 'Dark',
  Blue_Dark = 'Blue_Dark',
  Sakura = 'Sakura',
  Cloudy = 'Cloudy',
  Mountains = 'Mountains',
  Ice_Cream_Cones = 'Ice_Cream_Cones',
  Night_Moon = 'Night_Moon',
  Candy_Floral = 'Candy_Floral',
  Beach = 'Beach',
  Cartoon_Scene = 'Cartoon_Scene',
  Retro_Tape = 'Retro_Tape',
  Twilight = 'Twilight',
  Autumn = 'Autumn',
  Stars_Hearts_Clouds = 'Stars, Hearts and Clouds',
  Topographic = 'Topographic',
}

export type Theme = {
  title: ThemeTitles
  primary: string
  secondary: string
  primaryText: string
  secondaryText: string
  logoText?: string
  texture?: string
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
  },
  {
    title: ThemeTitles.Sakura,
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    primaryText: '#515151',
    secondaryText: '#f9476b',
    texture: 'sakura_floral',
    logoText: '#515151',
    tertiary: 'gray',
    note: '#515151',
    ledger: '#ff5e7f',
    cleffLine: '#ff5e7f',
    cleff: '#FFFFFF',
  },
  {
    title: ThemeTitles.Cloudy,
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    primaryText: '#212121',
    secondaryText: '#356bb1',
    logoText: '#FFFFFF',
    texture: 'cloudy',
    tertiary: 'gray',
    note: '#356bb1',
    ledger: '#356bb1',
    cleffLine: '#25467c',
    cleff: '#FFFFFF',
  },
  {
    title: ThemeTitles.Mountains,
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    primaryText: '#31b387',
    secondaryText: '#31b387',
    logoText: '#FFFFFF',
    texture: 'green_mountains',
    tertiary: 'gray',
    note: '#002726',
    ledger: '#356bb1',
    cleffLine: '#25467c',
    cleff: '#FFFFFF',
  },
  {
    title: ThemeTitles.Ice_Cream_Cones,
    primary: '#FFFFFF',
    // primary: 'linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2))',
    secondary: '#FFFFFF',
    primaryText: '#212121',
    secondaryText: '#bd8f19',
    logoText: '#212121',
    texture: 'ice_cream_cone',
    tertiary: 'gray',
    note: '#212121',
    ledger: '#356bb1',
    cleffLine: '#25467c',
    cleff: '#FFFFFF',
  },
  {
    title: ThemeTitles.Night_Moon,
    primary: '#FFFFFF',
    // primary: 'linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2))',
    secondary: '#FFFFFF',
    primaryText: '#DDDDDD',
    secondaryText: '#01427a',
    // logoText: '#212121',
    texture: 'night_moon',
    tertiary: 'gray',
    note: '#03a9f4',
    ledger: '#356bb1',
    cleffLine: '#25467c',
    cleff: '#FFFFFF',
  },
  {
    title: ThemeTitles.Candy_Floral,
    primary: '#FFFFFF',
    // primary: 'linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2))',
    secondary: '#FFFFFF',
    primaryText: '#515151',
    secondaryText: '#62aabf',
    // logoText: '#212121',
    texture: 'floral_strip',
    tertiary: 'gray',
    note: '#515151',
    ledger: '#356bb1',
    cleffLine: '#25467c',
    cleff: '#FFFFFF',
  },
  {
    title: ThemeTitles.Beach,
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    primaryText: '#515151',
    secondaryText: '#8b4466',
    texture: 'pink_beach',
    tertiary: 'gray',
    note: '#515151',
    ledger: '#356bb1',
    cleffLine: '#25467c',
    cleff: '#FFFFFF',
  },
  {
    title: ThemeTitles.Cartoon_Scene,
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    primaryText: '#212121',
    secondaryText: '#48a848',
    texture: 'fairytale_scene',
    tertiary: 'gray',
    note: '#48a848',
    ledger: '#356bb1',
    cleffLine: '#25467c',
    cleff: '#FFFFFF',
  },
  {
    title: ThemeTitles.Retro_Tape,
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    primaryText: '#212121',
    secondaryText: '#a8b533',
    texture: 'retro_tape',
    tertiary: 'gray',
    note: '#212121',
    ledger: '#356bb1',
    cleffLine: '#000000',
    cleff: '#FFFFFF',
  },
  {
    title: ThemeTitles.Stars_Hearts_Clouds,
    primary: '#515151',
    secondary: '#FFFFFF',
    primaryText: '#212121',
    secondaryText: '#6da1b0',
    texture: 'stars_hearts_clouds',
    tertiary: 'gray',
    note: '#515151',
    ledger: '#356bb1',
    cleffLine: '#515151',
    cleff: '#FFFFFF',
  },
  {
    title: ThemeTitles.Autumn,
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    primaryText: '#f76162',
    secondaryText: '#cc3334',
    texture: 'autumn_leaves',
    tertiary: 'gray',
    note: '#cc3334',
    ledger: '#356bb1',
    cleffLine: '#25467c',
    cleff: '#FFFFFF',
  },
  {
    title: ThemeTitles.Twilight,
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    primaryText: '#515151',
    secondaryText: '#ff767e',
    texture: 'twilight',
    tertiary: 'gray',
    note: '#ffffff',
    ledger: '#356bb1',
    cleffLine: '#25467c',
    cleff: '#FFFFFF',
  },
]