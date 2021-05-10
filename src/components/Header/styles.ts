import { StyleSheet } from 'react-native';
import {
  getStatusBarHeight
} from 'react-native-iphone-x-helper';

import { theme } from '../../styles/theme'; 

export const S = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text
  },
  userName: {
    fontSize: 32,
    color: theme.colors.heading,
    fontFamily: theme.fonts.heading,
    lineHeight: 40
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  }
});