import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

export const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  colors: {
    Black: '#000000',
  }
};

export const CustomDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    Black: '#FFFFFF',
  },
};
