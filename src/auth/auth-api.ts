import { apiBase } from '../_services/api';
import { type User } from './auth.types';

/**
 * Sends a POST request to the '/login' endpoint with the provided email and password.
 * 
 * @example Request (POST):
 * {
 *   "email": "user@example.com", // or "admin@useorigin.com"
 *   "password": "password123"
 * }
 * 
 * @example Response (200):
 * {
 *   "user_token": "6d2b2649-9464-47ad-b420-8ca8a0b45210",
 *   "user_role": "user" // or "admin"
 * }
 */
export const postSignIn = async (payload: { email: string, password: string }) => {
  const response = await apiBase.post<User>('/login', payload);
  return response.data;
}
