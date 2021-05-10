import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '../../styles/theme';

export const S = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.shape,
  },
  plantInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.shape,
    paddingHorizontal: 30,
    paddingVertical: 50,

  },
  plantName: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.heading,
    fontSize: 24,
    marginTop: 15
  },
  plantAbout: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text,
    textAlign: 'center',
    fontSize: 15,
    marginTop: 15
  },
  controller: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: getBottomSpace() || 20
  },
  tipContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.blue_light,
    padding: 20,
    borderRadius: 7,
    position: 'relative',
    bottom: 70
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    fontFamily: theme.fonts.text,
    fontSize: 17,
    color: theme.colors.blue,
    marginLeft: 20,
    textAlign: 'justify',
  },
  alertLabel: {
    textAlign: 'center',
    fontFamily: theme.fonts.complement,
    color: theme.colors.heading,
    fontSize: 12,
    marginBottom: 8
  },
  buttonContainer: {
    alignItems: 'center',
  },
  dateTimePickerTextAndroid: {
    color: theme.colors.heading,
    fontSize: 24,
    fontFamily: theme.fonts.heading,
  },
  dateTimePickerButtonAndroid: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 40
  }
});