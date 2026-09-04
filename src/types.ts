export type ProductCategory = 
  | 'hydrosols'
  | 'essential_oils'
  | 'carrier_oils'
  | 'special_ingredients'
  | 'pharma_grade';

export interface PackOption {
  size: string; // e.g. "15ml", "30ml", "100ml", "500ml", "1kg", "5kg", "25kg Drum"
  priceINR: number;
  priceUSD: number;
  isBulk?: boolean;
}

export interface Product {
  id: string;
  name: string;
  botanicalName?: string;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  extractionMethod: 'Steam Distillation' | 'Cold Pressed' | 'Hydro Distillation' | 'CO2 Extraction' | 'Fractional';
  plantPart?: string;
  origin?: string;
  colorAppearance?: string;
  aromaProfile?: string;
  keyBenefits: string[];
  packOptions: PackOption[];
  image: string;
  badge?: string;
  pharmaGrade?: boolean;
  casNumber?: string;
}

export interface CartItem {
  product: Product;
  selectedPack: PackOption;
  quantity: number;
}

export interface QuoteRequest {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  location: string;
  selectedCategory: string;
  message: string;
  estimatedVolume: string;
  needsPrivateLabel: boolean;
}
