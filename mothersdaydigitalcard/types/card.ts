/**
 * Card component type definitions
 * Manages overall card layout and structure
 */

export interface CardProps {
  title: string;
  subtitle?: string;
  message: string;
  children?: React.ReactNode;
}

export interface CardState {
  isOpen: boolean;
  showFinalMessage: boolean;
}
