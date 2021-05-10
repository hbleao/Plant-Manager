import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const S = StyleSheet.create({
  container: {
    height: 50,
    width: 100,
    backgroundColor: theme.colors.shape,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal : 5
  },
  containerActive: {
    backgroundColor: theme.colors.green_light,
  },
  text: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text
  },
  textActive: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.green_dark,
  }
});