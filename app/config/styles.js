import { Platform } from 'react-native';
import colors from './colors';

export default {
  colors: {
    color: colors.dark,
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
};
