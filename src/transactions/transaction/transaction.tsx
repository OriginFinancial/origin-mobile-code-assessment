import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { useRoute } from '../../app-stack';
import { detailStyles, styles } from './transaction.style';

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
