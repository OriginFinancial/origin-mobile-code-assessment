import { apiBase } from '../_services/api';
import type {
  Transaction,
  TransactionResponse,
} from './transaction/transaction.types';

export const getTransactions = async (page = 1, pageSize = 10) => {
  const response = await apiBase.get<TransactionResponse>(
    `/transactions?page=${page}&pageSize=${pageSize}`,
  );
  return response.data;
};

export const getTransaction = async (id: number) => {
  const response = await apiBase.get<Transaction>(`/transactions/${id}`);
  return response.data;
};

export const postCoordinates = async (
  id: number,
  payload: { lat: number; lon: number },
) => {
  const response = await apiBase.post(`/transactions/${id}/coordinates`, {
    Lat: payload.lat,
    Lon: payload.lon,
  });

  return response.data;
};

export const postReceipt = async (
  id: number,
  payload: { receiptImageUrl: string },
) => {
  const response = await apiBase.post(`/transactions/${id}/receipt`, {
    ReceiptImageUrl: payload.receiptImageUrl,
  });

  return response.data;
};
