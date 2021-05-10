import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const S = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 54
  },
  header: {
    alignItems: 'center',
    width: '100%',
  },
  emoji: {
    fontSize: 44
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    fontFamily: theme.fonts.heading,
    color: theme.colors.heading,
    marginTop: 20
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: theme.colors.gray,
    color: theme.colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  borderGreen: {
    borderBottomColor: theme.colors.green
  }
});