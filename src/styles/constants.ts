// ブレイクポイント
const xs = 0;
const sm = 600;
const md = 960;
const lg = 1280;
const xl = 1920;

export const breakPoint = {
  xs,
  sm,
  md,
  lg,
  xl,
} as const;

// 色
const gray = '#828282';
const grayLighten = '#bdbdbd';
const white = '#fff';

const blueDarken = '#06f';
const blue = '#2f80ed';
const red = '#EB5757';

const primary = blue;
const danger = red;

const border = grayLighten;
const placeHolder = gray;

export const colors = {
  gray,
  grayLighten,
  white,
  blueDarken,
  blue,
  red,
  primary,
  danger,
  border,
  placeHolder,
} as const;

// 色の変化
const buttonDarken = 0.2;
const buttonAlpha = 0.1;

export const colorRatios = {
  buttonDarken,
  buttonAlpha,
} as const;
