import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const style = StyleSheet.create({
  small: {
    backgroundColor: theme.colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    padding: 16
  },
  medium: {
    backgroundColor: theme.colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 32,
    paddingVertical: 16
  },
  large: {
    backgroundColor: theme.colors.green,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    paddingVertical: 16
  },
  buttonText: {
    fontSize: 16,
    color: theme.colors.white,
    fontFamily: theme.fonts.heading
  }
});