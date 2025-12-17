// Common Type Definitions
export interface Metric {
  value: string;
  label: string;
  change: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  avatarColor: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'teal' | 'blue' | 'purple' | 'gold' | 'cyan';
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

// Component Props
export interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'glass';
  className?: string;
  hoverable?: boolean;
}

// API Response Types
export interface SummaryResponse {
  id: string;
  originalUrl: string;
  summary: string;
  keyPoints: string[];
  readingTimeSaved: number;
  createdAt: string;
  metadata: {
    title: string;
    author?: string;
    wordCount: number;
    summaryLength: number;
  };
}

export interface ErrorResponse {
  error: string;
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  subscription: SubscriptionTier;
  usage: UsageStats;
}

export type SubscriptionTier = 'free' | 'pro' | 'business' | 'enterprise';

export interface UsageStats {
  summariesThisMonth: number;
  totalSummaries: number;
  monthlyLimit: number;
  nextResetDate: string;
}

// Theme Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  muted: string;
}

export type ThemeMode = 'light' | 'dark' | 'system';