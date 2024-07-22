import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Stack } from './app-stack';
import { Auth } from './auth/auth';
import { AuthProvider } from './auth/auth-provider';
import { Admin } from './profile/admin/admin';
import { Transaction } from './transactions/transaction/transaction';
import { Transactions } from './transactions/transactions';

export const App = () => (
  <SafeAreaProvider>
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen
            name="ProfileAdmin"
            component={Admin}
            options={{ title: 'Admin Restricted' }}
          />
          <Stack.Group>
            <Stack.Screen name="Transaction" component={Transaction} />
            <Stack.Screen name="Transactions" component={Transactions} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  </SafeAreaProvider>
);
