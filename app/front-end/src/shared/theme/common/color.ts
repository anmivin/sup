export const commonColors = {
  greenSuperlight: '#C0FFB8',
  greenLight: '#A2FFA6',
  greenMedium: '#65F227',
  greenDark: '#46CF1F',
  greenSuperdark: '#31AF28',
  greenExtra: '#2A8E12',

  turqoiseSuperlight: '#A0EDFF',
  turqoiseLight: '#39D7FE',
  turqoiseMedium: '#0098EE',
  turqoiseDark: '#13FFFF',
  turqoiseSuperdark: 'rgba(57, 215, 254, 0.5)',
  turqoiseExtra: '#015858',

  blueSuperlight: '#9FEDFF',
  blueLight: '#27A4F8',
  blueMedium: '#1916BB',
  blueDark: '#1A32A1',
  blueSuperdark: '#061142',
  blueExtra: '#0B0A1C',

  yellowSuperlight: '#EBFFB0',
  yellowLight: '#D6FF5B',
  yellowMedium: '',
  yellowDark: '#4B6500',
  yellowSuperdark: '',
  yellowExtra: '',

  pinkSuperlight: '#F0CBF3',
  pinkLight: '#D8A6FF',
  pinkMedium: '#CE63D6',
  pinkDark: '#5F106B',
  pinkSuperdark: '#3B0168',
  pinkExtra: '',

  monoSuperlight: '#FFFFFF',
  monoLight: '',
  monoMedium: '',
  monoDark: '#23282B',
  monoSuperdark: '#16191B',
  monoExtra: '#000000',

  transparentSuperlight: 'rgba(0, 0, 0, 0.08)',
  transparentLight: 'rgba(0, 0, 0, 0.2)',
  transparentMedium: 'rgba(0, 0, 0, 0.3)',
  transparentDark: 'rgba(0, 0, 0, 0.5)',
  transparentSuperdark: 'rgba(0, 0, 0, 0.8)',
  transparentExtra: '',
} as const;

export type CommonColor = keyof typeof commonColors;
