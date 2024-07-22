import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from 'react';
import { useNavigation } from '../app-stack';
import { Button } from '../_components/button';
import { TextInput } from '../_components/text-input';
import { Labeled } from '../_components/labeled';
import { style } from './auth.style';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { navigate } = useNavigation();

  const handleSignIn = () => {
    console.log('Sign in with:', email, password);
    navigate('Transactions');
  };

  return (
    <SafeAreaView edges={['top', 'bottom']} style={style.container}>
      <Text style={style.heading}>Welcome back!</Text>
      <View style={style.card}>
        <Labeled title="Email" nativeID="email">
          <TextInput placeholder="user@domain.com" onChangeText={setEmail} />
        </Labeled>
        <Labeled title="Password" nativeID="password">
          <TextInput placeholder="Password" onChangeText={setPassword} />
        </Labeled>
        <Button onPress={handleSignIn}>Sign In</Button>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
