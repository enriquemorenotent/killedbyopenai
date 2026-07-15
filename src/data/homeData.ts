export type AccentTone = 'green' | 'yellow' | 'purple' | 'blue' | 'red' | 'pink';
export type MemorialIcon = 'sparkles' | 'heart' | 'message' | 'bot';
export type ScheduledIcon = 'compass' | 'brain' | 'wave';
export type CategoryIcon = 'box' | 'zap' | 'code' | 'puzzle' | 'cpu';

export interface StatusMetric {
  value: string;
  label: string;
  note: string;
  tone: AccentTone;
  icon: 'skull' | 'calendar' | 'clock' | 'undo';
}

export interface MemorialItem {
  name: string;
  status: string;
  date: string;
  summary: string;
  category: string;
  tone: AccentTone;
  icon: MemorialIcon;
}

export interface ScheduledItem {
  name: string;
  subtitle: string;
  date: string;
  event: string;
  note: string;
  tone: AccentTone;
  icon: ScheduledIcon;
}

export interface CategoryItem {
  name: string;
  count: number;
  tone: AccentTone;
  icon: CategoryIcon;
}

export const statusMetrics: StatusMetric[] = [
  { value: '52', label: 'Products killed', note: 'And counting', tone: 'green', icon: 'skull' },
  { value: '3', label: 'On death row', note: 'Scheduled to end', tone: 'yellow', icon: 'calendar' },
  { value: '17', label: 'Absorbed or replaced', note: 'Evolved into something new', tone: 'purple', icon: 'clock' },
  { value: '2', label: 'Resurrected', note: 'Somehow came back', tone: 'blue', icon: 'undo' },
];

export const recentMemorials: MemorialItem[] = [
  {
    name: 'Sora',
    status: 'Killed',
    date: 'Apr 26, 2026',
    summary: 'Standalone Sora app and social experience for AI video generation.',
    category: 'Product',
    tone: 'purple',
    icon: 'sparkles',
  },
  {
    name: 'ChatGPT Pulse',
    status: 'Killed',
    date: 'Jun 2026',
    summary: 'Personalized daily research cards powered by your data and memory.',
    category: 'Feature',
    tone: 'green',
    icon: 'heart',
  },
  {
    name: 'ChatGPT on WhatsApp',
    status: 'Killed',
    date: 'Jan 15, 2026',
    summary: 'Official ChatGPT experience on WhatsApp.',
    category: 'Integration',
    tone: 'blue',
    icon: 'message',
  },
  {
    name: 'AI Text Classifier',
    status: 'Killed',
    date: 'Jul 20, 2023',
    summary: 'Tool to detect if text was AI-generated. Retired due to low accuracy.',
    category: 'Tool',
    tone: 'yellow',
    icon: 'bot',
  },
];

export const scheduledMemorials: ScheduledItem[] = [
  {
    name: 'ChatGPT Atlas',
    subtitle: 'AI-powered web browser',
    date: 'August 9, 2026',
    event: 'Scheduled shutdown',
    note: "OpenAI's browser will stop working on this date.",
    tone: 'blue',
    icon: 'compass',
  },
  {
    name: 'OpenAI o3 (in ChatGPT)',
    subtitle: 'Reasoning model',
    date: 'August 26, 2026',
    event: 'Scheduled retirement',
    note: 'Will be removed from ChatGPT.',
    tone: 'purple',
    icon: 'brain',
  },
  {
    name: 'Sora API',
    subtitle: 'API for Sora video generation',
    date: 'September 24, 2026',
    event: 'API shutdown',
    note: 'API access will be discontinued.',
    tone: 'green',
    icon: 'wave',
  },
];

export const categories: CategoryItem[] = [
  { name: 'Products', count: 18, tone: 'purple', icon: 'box' },
  { name: 'Features', count: 14, tone: 'green', icon: 'zap' },
  { name: 'APIs', count: 11, tone: 'blue', icon: 'code' },
  { name: 'Integrations', count: 6, tone: 'yellow', icon: 'puzzle' },
  { name: 'Models', count: 33, tone: 'pink', icon: 'cpu' },
];
