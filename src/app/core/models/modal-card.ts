export interface CardItem {
  title: string;
  values: string[];
  titleColor: string;
  valueColor: string;
}

export interface CardIcon {
  type: 'svg' | 'material' | 'image';
  value: string;
  bgColor?: string;
  iconColor?: string;
}

export interface CardContentItem {
  type: 'text' | 'grid' | 'key-value' | 'list' | 'badge';
  label?: string;
  value?: string | string[];
  color?: 'primary' | 'secondary' | 'accent' | 'warning' | 'error' | 'success';
  size?: 'sm' | 'md' | 'lg';
  columns?: number;
  items?: { label?: string; value: string; color?: string }[];
}

export interface CardData {
  title: string;
  subtitle?: string;
  icon?: CardIcon;
  content: CardContentItem[];
  actions?: { label: string; action: () => void; type?: 'primary' | 'secondary' }[];
}