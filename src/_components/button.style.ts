import { StyleSheet } from 'react-native';

import { token } from './tokens';

export const style = StyleSheet.create({
  button: {
    width: '100%',
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: token.color.primary,
    borderRadius: 4,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
