export type Language = 'vi' | 'en';

export interface BusinessArea {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  materials: string[];
  image: string;
  iconName: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  keyOutputs: string[];
  iconName: string;
}

export interface CoreValue {
  id: string;
  title: string;
  enTitle: string;
  description: string;
  iconName: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'apparel' | 'bags' | 'plush' | 'gifts';
  categoryLabel: string;
  image: string;
  moq: string;
  material: string;
  productionTime: string;
  techniques: string[];
  description: string;
  badge?: string;
  featured?: boolean;
}

export interface ClientPartner {
  name: string;
  category: string;
  highlightProduct: string;
  accentColor: string;
  description?: string;
}

export interface Testimonial {
  author: string;
  position: string;
  company: string;
  feedback: string;
  rating: number;
  partnerProduct: string;
}

export interface InquiryFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  category: string;
  quantity: string;
  notes: string;
}
