export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  volume: string;
  price: number;
  currency: string;
  imageAlt: string;
  imageUrl: string;
  number: string;
  notes?: string[];
  ingredients?: string[];
  usageInstructions?: string;
  sustainabilityCommitment?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  registeredAt: string;
  memberTier: string;
}

export interface UserAddress {
  id: string;
  title: string;
  recipient: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export interface OrderItemSummary {
  productName: string;
  volume: string;
  quantity: number;
  unitPrice: number;
}

export interface UserOrder {
  id: string;
  orderNumber: string;
  date: string;
  status: 'Entregado' | 'En preparación' | 'En tránsito';
  total: number;
  currency: string;
  items: OrderItemSummary[];
}

export interface UserSettings {
  plasticFreePackaging: boolean;
  carbonOffsetShipping: boolean;
  emailReceipts: boolean;
  orderUpdates: boolean;
  newsletter: boolean;
}
