
export enum AssetStatus {
  FUNDING = 'Funding',
  ACTIVE = 'Active',
  SETTLED = 'Settled',
  UPCOMING = 'Upcoming'
}

export enum AssetType {
  FIXED_INCOME = 'Fixed Income',
  REAL_ESTATE = 'Real Estate',
  VENTURE = 'Venture Capital',
  AGRICULTURE = 'Agri-Business'
}

export interface TokenAsset {
  id: string;
  name: string;
  type: AssetType;
  status: AssetStatus;
  yieldPa: number; // Annual yield percentage
  duration: number; // Months
  minInvestment: number;
  totalRaising: number;
  raised: number;
  rating: string;
  description: string;
  issuer: string;
  image: string;
  isVeriPura?: boolean;
  certificateLogo?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
