import { StyleSheet } from 'react-native';

import { token } from '../_components/tokens';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: token.color.backgroundSubtle,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
});

export const detailStyles = StyleSheet.create({
  detailItem: {
    width: '100%',
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderColor: token.color.outlineMain,
    borderBottomWidth: 1,
  },
  detailLabel: {
    flex: 0.5,
    fontWeight: 'bold',
    color: token.color.textNeutral,
  },
  detailValue: {
    flex: 1,
    color: token.color.textNeutral,
  },
});
