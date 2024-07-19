import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '../app-stack';
import { token } from '../_components/tokens';
import { getTransactions } from './transactions-api';
import { TransactionListItem } from './transaction-list-item';
import { TransactionResponse } from './transaction.types';

export const Transactions = () => {
  const [data, setData] = useState<TransactionResponse>();

  const navigation = useNavigation();

  useEffect(() => {
    getTransactions().then(setData).catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      {data ? data.transactions.map((transaction) => (
        <TransactionListItem
          key={transaction.id}
          onPress={() => navigation.navigate('Transaction', transaction)}
          transaction={transaction}
        />
      )) : (
        <View style={{ flex: 1 }}>
          <Text>Loading...</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: token.color.backgroundSubtle,
  },
});
