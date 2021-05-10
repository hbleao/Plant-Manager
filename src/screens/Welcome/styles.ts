import { 
  StyleSheet, 
  Dimensions 
} from 'react-native';

import { theme } from '../../styles/theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.heading,
    textAlign: 'center',
    color: theme.colors.heading,
    lineHeight: 34, 
    marginTop: 38
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: theme.fonts.text,
    paddingHorizontal: 24,
    color: theme.colors.heading
  },
});
