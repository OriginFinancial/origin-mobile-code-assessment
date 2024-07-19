import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { type Transaction } from './transaction.types';
import { style } from './transaction-list-item.style';

type Props = TouchableOpacityProps & {
  transaction: Transaction;
};

const formatShortDateTime = (date: string) =>
  Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date));

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);

export const TransactionListItem = (props: Props) => {
  const { transaction, style: touchOpacityStyle, ...touchOpacityProps } = props;

  return (
    <TouchableOpacity
      style={[style.container, touchOpacityStyle]}
      {...touchOpacityProps}
    >
      <View style={style.circle} />
      <View style={style.descriptionContainer}>
        <Text style={style.vendor} numberOfLines={1} ellipsizeMode="tail">
          {transaction.vendor}
        </Text>
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
