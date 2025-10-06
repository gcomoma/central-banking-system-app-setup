
export interface Account {
  id: string;
  accountNumber: string;
  accountType: 'checking' | 'savings' | 'business' | 'government';
  balance: number;
  currency: string;
  status: 'active' | 'frozen' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

export interface Transaction {
  id: string;
  fromAccount: string;
  toAccount: string;
  amount: number;
  currency: string;
  type: 'transfer' | 'deposit' | 'withdrawal' | 'fee';
  status: 'pending' | 'completed' | 'failed';
  description: string;
  timestamp: Date;
}

export interface Bank {
  id: string;
  name: string;
  code: string;
  country: string;
  status: 'active' | 'suspended';
  totalAssets: number;
  accountCount: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'operator' | 'auditor' | 'viewer';
  permissions: string[];
  lastLogin: Date;
}