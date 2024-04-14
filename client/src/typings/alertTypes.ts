export interface Alert {
  isActive: boolean;
  type?: 'warning' | 'success';
  label: string;
}
