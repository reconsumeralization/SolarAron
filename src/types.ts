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
  message: string;
  selectedPackage?: string;
}

export interface ServiceDetails {
  id: string;
  name: string;
  price?: number;
  priceUnit?: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  priceOptions?: {
    size: string;
    price: number;
    laborCost: number;
  }[];
}
