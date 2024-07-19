import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '../app-stack';
import { Button } from '../_components/button';
import { TextInput } from '../_components/text-input';
import { Labeled } from '../_components/labeled';
import { token } from '../_components/tokens';

export const Auth = () => {
  const { navigate } = useNavigation();

  const handleSignIn = () => {
    navigate('Transactions');
  };

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.container}>
      <Text style={styles.heading}>
        Welcome back!
      </Text>
      <View style={styles.card}>
        <Labeled title="Email" nativeID="email">
          <TextInput placeholder="user@domain.com" />
        </Labeled>
        <Labeled title="Password" nativeID="password">
          <TextInput placeholder="Password" />
        </Labeled>
        <Button onPress={handleSignIn}>
          Sign In
        </Button>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  }
});
