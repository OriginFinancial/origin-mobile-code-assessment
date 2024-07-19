import { StyleSheet } from 'react-native';

import { token } from '../_components/tokens';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: token.color.backgroundSubtle,
    paddingHorizontal: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    gap: 16,
  },
});
