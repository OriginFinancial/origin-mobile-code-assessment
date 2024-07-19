import { StyleSheet } from 'react-native';

import { token } from '../_components/tokens';

export const style = StyleSheet.create({
  container: {
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: token.color.outlineMain,
  },
  circle: {
    width: 46,
    height: 46,
    borderRadius: 46,
    backgroundColor: token.color.avatar.backgroundMain,
  },
  descriptionContainer: {
    flex: 1,
    gap: 8,
  },
  vendor: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  amountText: {
    fontSize: 16,
    flexShrink: 0,
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
});
