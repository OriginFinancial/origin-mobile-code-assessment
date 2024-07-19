import {
  NavigationProp,
  useNavigation as useRNNavigation,
  useRoute as useRNNRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppRoutes = {
  Auth: undefined;
  ProfileAdmin: undefined;
  Transactions: undefined;
  Transaction: { id: number, vendor: string };
};

export type AppNavigation = NavigationProp<AppRoutes>;
export type AppStackScreenProps<T extends keyof AppRoutes> = NativeStackScreenProps<AppRoutes, T>;
export type AppStackRouteProps<T extends keyof AppRoutes> = AppStackScreenProps<T>['route'];
export type AppStackNavigationProps<T extends keyof AppRoutes> = AppStackScreenProps<T>['navigation'];

export const Stack = createStackNavigator<AppRoutes>();

export const useNavigation = <T extends keyof AppRoutes>() => {
  return useRNNavigation<AppStackNavigationProps<T>>();
}

export const useRoute = <T extends keyof AppRoutes>() => {
  return useRNNRoute<AppStackRouteProps<T>>();
}
