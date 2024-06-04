import { opacity } from 'ui/theme/common/opacity';
import { rgbaFromHex } from 'ui/theme/theme.lib';

const semanticBaseColors = {
  red50: '#FFC3C3',
  red100: '#FF9D9D',
  red200: '#FF7070',
  red300: '#FF4040',
  red400: '#E73333',
  red500: '#CA2424',
  red600: '#991010',
  red700: '#660404',
  red800: '#3F0000',
  red900: '#170000',

  brown50: '#FFDBC3',
  brown100: '#F6C1A0',
  brown200: '#E4A27A',
  brown300: '#C67D53',
  brown400: '#B36C43',
  brown500: '#A05A33',
  brown600: '#733919',
  brown700: '#491F09',
  brown800: '#321201',
  brown900: '#170800',

  orange50: '#FFDDC7',
  orange100: '#FFC08C',
  orange200: '#FFA54A',
  orange300: '#FF8C00',
  orange400: '#EC7D00',
  orange500: '#D06900',
  orange600: '#9D4903',
  orange700: '#6A2B00',
  orange800: '#421801',
  orange900: '#240A00',

  yellow50: '#FFECC7',
  yellow100: '#FFDB8C',
  yellow200: '#FFCB4A',
  yellow300: '#FFBB00',
  yellow400: '#E49E02',
  yellow500: '#CF8606',
  yellow600: '#9B5D03',
  yellow700: '#683A03',
  yellow800: '#412101',
  yellow900: '#241000',

  green50: '#CAFFC3',
  green100: '#9DFD9A',
  green200: '#6EF277',
  green300: '#42DB5B',
  green400: '#34C649',
  green500: '#25A935',
  green600: '#117E19',
  green700: '#034E06',
  green800: '#023201',
  green900: '#021700',

  marine50: '#C3FFF5',
  marine100: '#96FAEA',
  marine200: '#67EBD7',
  marine300: '#39D0BB',
  marine400: '#2DBCA8',
  marine500: '#1FA08F',
  marine600: '#0E7366',
  marine700: '#044740',
  marine800: '#01322C',
  marine900: '#001715',

  sky50: '#C3F5FF',
  sky100: '#8EF0FF',
  sky200: '#54E2FD',
  sky300: '#1BCCEB',
  sky400: '#14B7D4',
  sky500: '#0C9CB6',
  sky600: '#026C80',
  sky700: '#014553',
  sky800: '#002F38',
  sky900: '#001317',

  blue50: '#C3E1FF',
  blue100: '#93CAFF',
  blue200: '#5BA7FF',
  blue300: '#227AFF',
  blue400: '#196AE7',
  blue500: '#0C52C3',
  blue600: '#033793',
  blue700: '#002366',
  blue800: '#00143F',
  blue900: '#000717',

  violet50: '#E4D7FF',
  violet100: '#D4BDFF',
  violet200: '#BA9AFF',
  violet300: '#9672FF',
  violet400: '#805CE7',
  violet500: '#623EC2',
  violet600: '#402094',
  violet700: '#270774',
  violet800: '#190052',
  violet900: '#0D0029',

  purple50: '#F8D7FF',
  purple100: '#F7BCFF',
  purple200: '#EB9AFF',
  purple300: '#D373F5',
  purple400: '#BD5DDE',
  purple500: '#A747C7',
  purple600: '#792492',
  purple700: '#4F0D61',
  purple800: '#33043F',
  purple900: '#1B0121',

  pink50: '#FFD4EA',
  pink100: '#FFBAE3',
  pink200: '#FF94D2',
  pink300: '#FF69BA',
  pink400: '#E755A3',
  pink500: '#C63180',
  pink600: '#921D5A',
  pink700: '#650939',
  pink800: '#39011F',
  pink900: '#17000B',

  teal50: '#BDF5F1',
  teal100: '#7DDED9',
  teal200: '#35BEB7',
  teal300: '#009D97',
  teal400: '#138681',
  teal500: '#1F6F6B',
  teal600: '#165754',
  teal700: '#00403D',
  teal800: '#002927',
  teal900: '#001211',

  gray50: '#E8EAEE',
  gray100: '#D5D9E4',
  gray200: '#B7BBCA',
  gray300: '#9A9EAF',
  gray400: '#808598',
  gray500: '#686E81',
  gray600: '#525769',
  gray700: '#3D4252',
  gray800: '#2A2E3B',
  gray900: '#181B24',
};

const semantiColors = {
  red: semanticBaseColors.red300,
  brown: semanticBaseColors.brown300,
  orange: semanticBaseColors.orange300,
  yellow: semanticBaseColors.yellow300,
  green: semanticBaseColors.green300,
  marine: semanticBaseColors.marine300,
  sky: semanticBaseColors.sky300,
  blue: semanticBaseColors.blue300,
  violet: semanticBaseColors.violet300,
  purple: semanticBaseColors.purple300,
  pink: semanticBaseColors.pink300,
  teal: semanticBaseColors.teal300,
  gray: semanticBaseColors.gray300,
};

const semanticAlphaColors = {
  redA25: rgbaFromHex(semantiColors.red, opacity['25']),
  redA50: rgbaFromHex(semantiColors.red, opacity['50']),
  redA75: rgbaFromHex(semantiColors.red, opacity['75']),
  redA100: rgbaFromHex(semantiColors.red, opacity['100']),
  redA150: rgbaFromHex(semantiColors.red, opacity['150']),
  redA200: rgbaFromHex(semantiColors.red, opacity['200']),
  redA300: rgbaFromHex(semantiColors.red, opacity['300']),
  redA400: rgbaFromHex(semantiColors.red, opacity['400']),
  redA500: rgbaFromHex(semantiColors.red, opacity['500']),
  redA550: rgbaFromHex(semantiColors.red, opacity['550']),
  redA600: rgbaFromHex(semantiColors.red, opacity['600']),
  redA700: rgbaFromHex(semantiColors.red, opacity['700']),
  redA800: rgbaFromHex(semantiColors.red, opacity['800']),
  redA900: rgbaFromHex(semantiColors.red, opacity['900']),

  brownA25: rgbaFromHex(semantiColors.brown, opacity['25']),
  brownA50: rgbaFromHex(semantiColors.brown, opacity['50']),
  brownA75: rgbaFromHex(semantiColors.brown, opacity['75']),
  brownA100: rgbaFromHex(semantiColors.brown, opacity['100']),
  brownA150: rgbaFromHex(semantiColors.brown, opacity['150']),
  brownA200: rgbaFromHex(semantiColors.brown, opacity['200']),
  brownA300: rgbaFromHex(semantiColors.brown, opacity['300']),
  brownA400: rgbaFromHex(semantiColors.brown, opacity['400']),
  brownA500: rgbaFromHex(semantiColors.brown, opacity['500']),
  brownA550: rgbaFromHex(semantiColors.brown, opacity['550']),
  brownA600: rgbaFromHex(semantiColors.brown, opacity['600']),
  brownA700: rgbaFromHex(semantiColors.brown, opacity['700']),
  brownA800: rgbaFromHex(semantiColors.brown, opacity['800']),
  brownA900: rgbaFromHex(semantiColors.brown, opacity['900']),

  orangeA25: rgbaFromHex(semantiColors.orange, opacity['25']),
  orangeA50: rgbaFromHex(semantiColors.orange, opacity['50']),
  orangeA75: rgbaFromHex(semantiColors.orange, opacity['75']),
  orangeA100: rgbaFromHex(semantiColors.orange, opacity['100']),
  orangeA150: rgbaFromHex(semantiColors.orange, opacity['150']),
  orangeA200: rgbaFromHex(semantiColors.orange, opacity['200']),
  orangeA300: rgbaFromHex(semantiColors.orange, opacity['300']),
  orangeA400: rgbaFromHex(semantiColors.orange, opacity['400']),
  orangeA500: rgbaFromHex(semantiColors.orange, opacity['500']),
  orangeA550: rgbaFromHex(semantiColors.orange, opacity['550']),
  orangeA600: rgbaFromHex(semantiColors.orange, opacity['600']),
  orangeA700: rgbaFromHex(semantiColors.orange, opacity['700']),
  orangeA800: rgbaFromHex(semantiColors.orange, opacity['800']),
  orangeA900: rgbaFromHex(semantiColors.orange, opacity['900']),

  yellowA25: rgbaFromHex(semantiColors.yellow, opacity['25']),
  yellowA50: rgbaFromHex(semantiColors.yellow, opacity['50']),
  yellowA75: rgbaFromHex(semantiColors.yellow, opacity['75']),
  yellowA100: rgbaFromHex(semantiColors.yellow, opacity['100']),
  yellowA150: rgbaFromHex(semantiColors.yellow, opacity['150']),
  yellowA200: rgbaFromHex(semantiColors.yellow, opacity['200']),
  yellowA300: rgbaFromHex(semantiColors.yellow, opacity['300']),
  yellowA400: rgbaFromHex(semantiColors.yellow, opacity['400']),
  yellowA500: rgbaFromHex(semantiColors.yellow, opacity['500']),
  yellowA550: rgbaFromHex(semantiColors.yellow, opacity['550']),
  yellowA600: rgbaFromHex(semantiColors.yellow, opacity['600']),
  yellowA700: rgbaFromHex(semantiColors.yellow, opacity['700']),
  yellowA800: rgbaFromHex(semantiColors.yellow, opacity['800']),
  yellowA900: rgbaFromHex(semantiColors.yellow, opacity['900']),

  greenA25: rgbaFromHex(semantiColors.green, opacity['25']),
  greenA50: rgbaFromHex(semantiColors.green, opacity['50']),
  greenA75: rgbaFromHex(semantiColors.green, opacity['75']),
  greenA100: rgbaFromHex(semantiColors.green, opacity['100']),
  greenA150: rgbaFromHex(semantiColors.green, opacity['150']),
  greenA200: rgbaFromHex(semantiColors.green, opacity['200']),
  greenA300: rgbaFromHex(semantiColors.green, opacity['300']),
  greenA400: rgbaFromHex(semantiColors.green, opacity['400']),
  greenA500: rgbaFromHex(semantiColors.green, opacity['500']),
  greenA550: rgbaFromHex(semantiColors.green, opacity['550']),
  greenA600: rgbaFromHex(semantiColors.green, opacity['600']),
  greenA700: rgbaFromHex(semantiColors.green, opacity['700']),
  greenA800: rgbaFromHex(semantiColors.green, opacity['800']),
  greenA900: rgbaFromHex(semantiColors.green, opacity['900']),

  marineA25: rgbaFromHex(semantiColors.marine, opacity['25']),
  marineA50: rgbaFromHex(semantiColors.marine, opacity['50']),
  marineA75: rgbaFromHex(semantiColors.marine, opacity['75']),
  marineA100: rgbaFromHex(semantiColors.marine, opacity['100']),
  marineA150: rgbaFromHex(semantiColors.marine, opacity['150']),
  marineA200: rgbaFromHex(semantiColors.marine, opacity['200']),
  marineA300: rgbaFromHex(semantiColors.marine, opacity['300']),
  marineA400: rgbaFromHex(semantiColors.marine, opacity['400']),
  marineA500: rgbaFromHex(semantiColors.marine, opacity['500']),
  marineA550: rgbaFromHex(semantiColors.marine, opacity['550']),
  marineA600: rgbaFromHex(semantiColors.marine, opacity['600']),
  marineA700: rgbaFromHex(semantiColors.marine, opacity['700']),
  marineA800: rgbaFromHex(semantiColors.marine, opacity['800']),
  marineA900: rgbaFromHex(semantiColors.marine, opacity['900']),

  skyA25: rgbaFromHex(semantiColors.sky, opacity['25']),
  skyA50: rgbaFromHex(semantiColors.sky, opacity['50']),
  skyA75: rgbaFromHex(semantiColors.sky, opacity['75']),
  skyA100: rgbaFromHex(semantiColors.sky, opacity['100']),
  skyA150: rgbaFromHex(semantiColors.sky, opacity['150']),
  skyA200: rgbaFromHex(semantiColors.sky, opacity['200']),
  skyA300: rgbaFromHex(semantiColors.sky, opacity['300']),
  skyA400: rgbaFromHex(semantiColors.sky, opacity['400']),
  skyA500: rgbaFromHex(semantiColors.sky, opacity['500']),
  skyA550: rgbaFromHex(semantiColors.sky, opacity['550']),
  skyA600: rgbaFromHex(semantiColors.sky, opacity['600']),
  skyA700: rgbaFromHex(semantiColors.sky, opacity['700']),
  skyA800: rgbaFromHex(semantiColors.sky, opacity['800']),
  skyA900: rgbaFromHex(semantiColors.sky, opacity['900']),

  blueA25: rgbaFromHex(semantiColors.blue, opacity['25']),
  blueA50: rgbaFromHex(semantiColors.blue, opacity['50']),
  blueA75: rgbaFromHex(semantiColors.blue, opacity['75']),
  blueA100: rgbaFromHex(semantiColors.blue, opacity['100']),
  blueA150: rgbaFromHex(semantiColors.blue, opacity['150']),
  blueA200: rgbaFromHex(semantiColors.blue, opacity['200']),
  blueA300: rgbaFromHex(semantiColors.blue, opacity['300']),
  blueA400: rgbaFromHex(semantiColors.blue, opacity['400']),
  blueA500: rgbaFromHex(semantiColors.blue, opacity['500']),
  blueA550: rgbaFromHex(semantiColors.blue, opacity['550']),
  blueA600: rgbaFromHex(semantiColors.blue, opacity['600']),
  blueA700: rgbaFromHex(semantiColors.blue, opacity['700']),
  blueA800: rgbaFromHex(semantiColors.blue, opacity['800']),
  blueA900: rgbaFromHex(semantiColors.blue, opacity['900']),

  violetA25: rgbaFromHex(semantiColors.violet, opacity['25']),
  violetA50: rgbaFromHex(semantiColors.violet, opacity['50']),
  violetA75: rgbaFromHex(semantiColors.violet, opacity['75']),
  violetA100: rgbaFromHex(semantiColors.violet, opacity['100']),
  violetA150: rgbaFromHex(semantiColors.violet, opacity['150']),
  violetA200: rgbaFromHex(semantiColors.violet, opacity['200']),
  violetA300: rgbaFromHex(semantiColors.violet, opacity['300']),
  violetA400: rgbaFromHex(semantiColors.violet, opacity['400']),
  violetA500: rgbaFromHex(semantiColors.violet, opacity['500']),
  violetA550: rgbaFromHex(semantiColors.violet, opacity['550']),
  violetA600: rgbaFromHex(semantiColors.violet, opacity['600']),
  violetA700: rgbaFromHex(semantiColors.violet, opacity['700']),
  violetA800: rgbaFromHex(semantiColors.violet, opacity['800']),
  violetA900: rgbaFromHex(semantiColors.violet, opacity['900']),

  purpleA25: rgbaFromHex(semantiColors.purple, opacity['25']),
  purpleA50: rgbaFromHex(semantiColors.purple, opacity['50']),
  purpleA75: rgbaFromHex(semantiColors.purple, opacity['75']),
  purpleA100: rgbaFromHex(semantiColors.purple, opacity['100']),
  purpleA150: rgbaFromHex(semantiColors.purple, opacity['150']),
  purpleA200: rgbaFromHex(semantiColors.purple, opacity['200']),
  purpleA300: rgbaFromHex(semantiColors.purple, opacity['300']),
  purpleA400: rgbaFromHex(semantiColors.purple, opacity['400']),
  purpleA500: rgbaFromHex(semantiColors.purple, opacity['500']),
  purpleA550: rgbaFromHex(semantiColors.purple, opacity['550']),
  purpleA600: rgbaFromHex(semantiColors.purple, opacity['600']),
  purpleA700: rgbaFromHex(semantiColors.purple, opacity['700']),
  purpleA800: rgbaFromHex(semantiColors.purple, opacity['800']),
  purpleA900: rgbaFromHex(semantiColors.purple, opacity['900']),

  pinkA25: rgbaFromHex(semantiColors.pink, opacity['25']),
  pinkA50: rgbaFromHex(semantiColors.pink, opacity['50']),
  pinkA75: rgbaFromHex(semantiColors.pink, opacity['75']),
  pinkA100: rgbaFromHex(semantiColors.pink, opacity['100']),
  pinkA150: rgbaFromHex(semantiColors.pink, opacity['150']),
  pinkA200: rgbaFromHex(semantiColors.pink, opacity['200']),
  pinkA300: rgbaFromHex(semantiColors.pink, opacity['300']),
  pinkA400: rgbaFromHex(semantiColors.pink, opacity['400']),
  pinkA500: rgbaFromHex(semantiColors.pink, opacity['500']),
  pinkA550: rgbaFromHex(semantiColors.pink, opacity['550']),
  pinkA600: rgbaFromHex(semantiColors.pink, opacity['600']),
  pinkA700: rgbaFromHex(semantiColors.pink, opacity['700']),
  pinkA800: rgbaFromHex(semantiColors.pink, opacity['800']),
  pinkA900: rgbaFromHex(semantiColors.pink, opacity['900']),

  tealA25: rgbaFromHex(semantiColors.teal, opacity['25']),
  tealA50: rgbaFromHex(semantiColors.teal, opacity['50']),
  tealA75: rgbaFromHex(semantiColors.teal, opacity['75']),
  tealA100: rgbaFromHex(semantiColors.teal, opacity['100']),
  tealA150: rgbaFromHex(semantiColors.teal, opacity['150']),
  tealA200: rgbaFromHex(semantiColors.teal, opacity['200']),
  tealA300: rgbaFromHex(semantiColors.teal, opacity['300']),
  tealA400: rgbaFromHex(semantiColors.teal, opacity['400']),
  tealA500: rgbaFromHex(semantiColors.teal, opacity['500']),
  tealA550: rgbaFromHex(semantiColors.teal, opacity['550']),
  tealA600: rgbaFromHex(semantiColors.teal, opacity['600']),
  tealA700: rgbaFromHex(semantiColors.teal, opacity['700']),
  tealA800: rgbaFromHex(semantiColors.teal, opacity['800']),
  tealA900: rgbaFromHex(semantiColors.teal, opacity['900']),

  grayA25: rgbaFromHex(semantiColors.gray, opacity['25']),
  grayA50: rgbaFromHex(semantiColors.gray, opacity['50']),
  grayA75: rgbaFromHex(semantiColors.gray, opacity['75']),
  grayA100: rgbaFromHex(semantiColors.gray, opacity['100']),
  grayA150: rgbaFromHex(semantiColors.gray, opacity['150']),
  grayA200: rgbaFromHex(semantiColors.gray, opacity['200']),
  grayA300: rgbaFromHex(semantiColors.gray, opacity['300']),
  grayA400: rgbaFromHex(semantiColors.gray, opacity['400']),
  grayA500: rgbaFromHex(semantiColors.gray, opacity['500']),
  grayA550: rgbaFromHex(semantiColors.gray, opacity['550']),
  grayA600: rgbaFromHex(semantiColors.gray, opacity['600']),
  grayA700: rgbaFromHex(semantiColors.gray, opacity['700']),
  grayA800: rgbaFromHex(semantiColors.gray, opacity['800']),
  grayA900: rgbaFromHex(semantiColors.gray, opacity['900']),
};

export const semanticColors = {
  ...semanticBaseColors,
  ...semantiColors,
  ...semanticAlphaColors,
} as const;