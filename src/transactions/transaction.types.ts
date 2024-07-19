export type Transaction = {
  id: number;
  type: string;
  amount: number;
  category: string;
  date: string;
  lat: number;
  lon: number;
  receiptImage: string;
  vendor: string;
};

export type TransactionResponse = {
  page: number;
  pageSize: number;
  totalRecords: number;
  totalPages: number;
  transactions: Transaction[];
};
