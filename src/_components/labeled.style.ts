import { StyleSheet } from 'react-native';

import { token } from './tokens';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    gap: 8,
  },
  label: {
    fontWeight: 'bold',
    color: token.color.textNeutral,
  },
});
