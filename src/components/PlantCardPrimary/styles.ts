import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const S = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    maxWidth: '45%',
    backgroundColor: theme.colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    margin: 10
  },
  text: {
    color: theme.colors.green_dark,
    fontFamily: theme.fonts.heading,
    marginVertical: 16 
  }
})