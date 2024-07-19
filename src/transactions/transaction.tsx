import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useRoute } from '../app-stack';
import { token } from '../_components/tokens';

const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <View style={detailStyles.detailItem}>
    <Text style={detailStyles.detailLabel}>{label}</Text>
    <Text style={detailStyles.detailValue}>{value}</Text>
  </View>
);

export const Transaction = () => {
  const { params } = useRoute<'Transaction'>();
  const { id, vendor } = params;

  return (
    <View style={styles.container}>
      <DetailItem label="Id" value={`${id}`} />
      <DetailItem label="Vendor" value={vendor} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: token.color.backgroundSubtle,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
});

const detailStyles = StyleSheet.create({
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
