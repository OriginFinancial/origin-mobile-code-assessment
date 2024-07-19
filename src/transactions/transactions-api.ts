import { apiBase } from '../_services/api';
import type { Transaction, TransactionResponse } from './transaction.types';

/**
 * Retrieves a list of transactions with pagination.
 * 
 * @example Request (GET):
 * /transactions?page=1&pageSize=10
 * 
 * @example Response (200):
 * {
 *   "Transactions": [
 *     {
 *       "Id": 1,
 *       "Amount": 100,
 *       "Date": "3021-04-05T00:00:00Z",
 *       "Vendor": "Big Apple Bank",
 *       "Category": "finance",
 *       "Type": "withdrawal",
 *       "Lat": 0,
 *       "Lon": 0,
 *       "ReceiptImage": "https://example.com/image.jpg"
 *     },
 *     ...
 *   ],
 *   "Page": 1,
 *   "pageSize": 10,
 *   "TotalRecords": 100,
 *   "TotalPages": 10
 * }
 */
export const getTransactions = async (page = 1, pageSize = 10) => {
  const response = await apiBase.get<TransactionResponse>(`/transactions?page=${page}&pageSize=${pageSize}`);
  return response.data;
};

/**
 * Retrieves details of a specific transaction by ID.
 * 
 * @example Request (GET):
 * /transactions/2
 * 
 * @example Response (200):
 * {
 *   "Id": 2,
 *   "Date": "3021-01-01T00:00:00Z",
 *   "Vendor": "Mom's Friendly Robot Company",
 *   "Vendor": "Amazon",
 *   "Category": "shopping",
 *   "Type": "deposit",
 *   "Lat": -73.935242,
 *   "Lon": 40.730610,
 *   "ReceiptImage": "https://example.com/image.jpg"
 * }
 */
export const getTransaction = async (id: number) => {
  const response = await apiBase.get<Transaction>(`/transactions/${id}`);
  return response.data;
};

/**
 * Sends a POST request to add coordinates to a specific transaction.
 * 
 * @example Request (POST):
 * /transactions/1/coordinates
 * {
 *   "Lat": 12.34,
 *   "Lon": 56.78
 * }
 * 
 * @example Response (200): (empty response)
 */
export const postCoordinates = async (id: number, payload: { lat: number, lon: number }) => {
  const response = await apiBase.post(`/transactions/${id}/coordinates`, {
    Lat: payload.lat,
    Lon: payload.lon,
  });

  return response.data;
};

/**
 * Sends a POST request to add a receipt image URL to a specific transaction.
 * 
 * @example Request (POST):
 * /transactions/1/receipt
 * {
 *   "ReceiptImageUrl": "https://example.com/receipt.jpg"
 * }
 * 
 * @example Response (200): (empty response)
 */
export const postReceipt = async (id: number, payload: { receiptImageUrl: string }) => {
  const response = await apiBase.post(`/transactions/${id}/receipt`, {
    ReceiptImageUrl: payload.receiptImageUrl,
  });

  return response.data;
};
