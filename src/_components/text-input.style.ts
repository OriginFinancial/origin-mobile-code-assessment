import { StyleSheet } from 'react-native';

import { token } from './tokens';

export const style = StyleSheet.create({
  input: {
    width: '100%',
    height: 46,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: token.color.backgroundMain,
    color: token.color.textNeutral,
    borderColor: token.color.secondary,
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 4,
  },
});
