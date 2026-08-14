export interface ProductItem {
  id: string;
  name: string;
  badge?: string;
  subtitle: string;
  category: 'tool' | 'consumable';
  price: number;
  oldPrice?: number;
  image: string;
  purpose: string;
  nails?: string;
  energy?: string;
  warranty?: string;
  specs: { label: string; value: string }[];
  inStock: boolean;
  packageContents?: string[];
}

export interface WorkTrade {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  description: string;
  points: string[];
  speed: string;
  image: string;
  suitablePins: string;
}

export interface ComparisonRow {
  parameter: string;
  touaStandard: string;
  tengyaGsn50II: string;
  highlight?: boolean;
  explanation?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'compatibility' | 'warranty' | 'delivery' | 'barrel' | 'service';
}

export interface ServicePart {
  name: string;
  stockStatus: string;
  repairTime: string;
  compatibleWith: string;
}

export interface OrderFormData {
  name: string;
  phone: string;
  city: string;
  selectedProductId: string;
  quantity: number;
  needGasCanisters: number;
  needNailsBoxes: number;
  nailsType: string;
  deliveryMethod: 'cdek_pvz' | 'cdek_courier' | 'pickup_moscow';
  paymentMethod: 'cash_on_delivery' | 'bank_invoice_vat' | 'online_card';
  comment: string;
}
