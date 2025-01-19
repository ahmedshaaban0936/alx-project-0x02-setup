export interface CardProps {
  title: string;
  content: string;
}

export interface Example {
  id: number;
  name: string;
}
export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
  children: React.ReactNode;
}
