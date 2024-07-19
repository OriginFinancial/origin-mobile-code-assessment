import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '../app-stack';
import { Button } from '../_components/button';
import { TextInput } from '../_components/text-input';
import { Labeled } from '../_components/labeled';
import { style } from './auth.style';

export const Auth = () => {
  const { navigate } = useNavigation();

  const handleSignIn = () => {
    navigate('Transactions');
  };

  return (
    <SafeAreaView edges={['top', 'bottom']} style={style.container}>
      <Text style={style.heading}>Welcome back!</Text>
      <View style={style.card}>
        <Labeled title="Email" nativeID="email">
          <TextInput placeholder="user@domain.com" />
        </Labeled>
        <Labeled title="Password" nativeID="password">
          <TextInput placeholder="Password" />
        </Labeled>
        <Button onPress={handleSignIn}>Sign In</Button>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
