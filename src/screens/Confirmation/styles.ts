import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const S = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    padding: 30
  },
  emoji: {
    fontSize: 78,
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: theme.fonts.heading,
    textAlign: 'center',
    color: theme.colors.heading,
    lineHeight: 38,
    marginTop: 15
  },
  subtitle: {
    fontFamily: theme.fonts.text,
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10,
    color: theme.colors.heading
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    alignItems: 'center',
    marginTop: 20,
  },
});