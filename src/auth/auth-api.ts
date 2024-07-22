import { apiBase } from '../_services/api';
import { type User } from './auth.types';

export const postSignIn = async (payload: {
  email: string;
  password: string;
}) => {
  const response = await apiBase.post<User>('/login', payload);
  return response.data;
};
