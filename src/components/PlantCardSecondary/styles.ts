import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const S = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.shape,
    marginVertical: 5,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    color: theme.colors.heading,
    fontFamily: theme.fonts.heading,
    fontSize: 17
  },
  details: {
    alignItems: 'flex-end',
  },
  timeLabel: {
    fontSize: 16,
    fontFamily: theme.fonts.text,
    color: theme.colors.heading,
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: theme.fonts.heading,
    color: theme.colors.heading,
  },
  buttonRemove: {
    width: 100,
    height: 85,
    backgroundColor: theme.colors.red,
    marginTop: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 15,
    paddingLeft: 5
  },
  buttonRemoveIcon: {
    color: theme.colors.white
  }
})