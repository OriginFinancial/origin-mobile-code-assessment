import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { token } from '../_components/tokens';
import { type Transaction } from './transaction.types';

type Props = TouchableOpacityProps & {
  transaction: Transaction;
};

const formatShortDateTime = (date: string) => (
  Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
);

const formatCurrency = (amount: number) => (
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
);

export const TransactionListItem = (props: Props) => {
  const { transaction, style: touchOpacityStyle, ...touchOpacityProps } = props;

  return (
    <TouchableOpacity style={[style.container, touchOpacityStyle]} {...touchOpacityProps}>
      <View style={style.circle} />
      <View style={style.descriptionContainer}>
        <Text style={style.vendor} numberOfLines={1} ellipsizeMode="tail">{transaction.vendor}</Text>
        <Text style={style.date}>{formatShortDateTime(transaction.date)}</Text>
      </View>
      <View>
        <Text style={style.amountText} numberOfLines={1}>
          {formatCurrency(transaction.amount)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
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
