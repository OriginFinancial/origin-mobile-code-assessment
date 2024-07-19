import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { useNavigation } from '../app-stack';
import { getTransactions } from './transactions-api';
import { TransactionListItem } from './transaction-list-item';
import { TransactionResponse } from './transaction.types';
import { style } from './transactions.style';

export const Transactions = () => {
  const [data, setData] = useState<TransactionResponse>();

  const navigation = useNavigation();

  useEffect(() => {
    getTransactions().then(setData).catch(console.error);
  }, []);

  return (
    <View style={style.container}>
      {data ? (
        data.transactions.map((transaction) => (
          <TransactionListItem
            key={transaction.id}
            onPress={() => navigation.navigate('Transaction', transaction)}
            transaction={transaction}
          />
        ))
      ) : (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={{ fontWeight: 'bold' }}>Fecthing transactions...</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
};
