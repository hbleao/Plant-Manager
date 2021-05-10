import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const S = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 30
  },
  title: {
    fontSize: 17,
    fontFamily: theme.fonts.heading,
    color: theme.colors.heading,
    marginTop: 15,
    lineHeight: 20
  },
  subtitle: {
    fontSize: 17,
    fontFamily: theme.fonts.text,
    color: theme.colors.heading,
    lineHeight: 20
  },
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginVertical: 32
  },
  plants: {
    flex: 1,
    justifyContent: 'center',
  }
})