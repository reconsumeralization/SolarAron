export interface MaintenancePackage {
  id: string;
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
  savings: number;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  selectedPackage?: string;
  message: string;
}