/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { DarkTheme, DefaultTheme } from '@react-navigation/native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#262424';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#42a85d', 
    card: '#252626',    
    text: '#ffffff',     
    background: '#303030',
    selectItem: "#8d61ba",
    red: '#EF0827',
    yellow: '#FCC70B',
    green: '#4FEE57',
  },
};

export const MyLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#42a85d',
    card: '#ffffff',
    text: '#222222',
    background: '#f2ebeb', 
    selectItem: "#8d61ba",
    red: '#EF0827',
    yellow: '#FCC70B',
    green: '#4FEE57',
  },
};
