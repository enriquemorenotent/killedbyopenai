export type AccentTone = 'green' | 'yellow' | 'purple' | 'blue' | 'red' | 'pink';

export type MemorialStatus =
  | 'killed'
  | 'retired'
  | 'deprecated'
  | 'absorbed'
  | 'renamed'
  | 'replaced'
  | 'scheduled'
  | 'resurrected';

export type MemorialCategory = 'Product' | 'Feature' | 'API' | 'Integration' | 'Model' | 'Tool';
export type MemorialSection = 'graveyard' | 'models' | 'death-row';
export type MemorialIcon =
  | 'archive'
  | 'bot'
  | 'brain'
  | 'browser'
  | 'code'
  | 'compass'
  | 'heart'
  | 'layers'
  | 'message'
  | 'puzzle'
  | 'search'
  | 'sparkles'
  | 'terminal'
  | 'wave';

export interface MemorialSource {
  label: string;
  url: string;
}

export interface MemorialRecord {
  slug: string;
  name: string;
  category: MemorialCategory;
  status: MemorialStatus;
  section: MemorialSection;
  eventDate: string;
  eventLabel: string;
  summary: string;
  epitaph: string;
  cause: string;
  tone: AccentTone;
  icon: MemorialIcon;
  sources: MemorialSource[];
  body: string[];
  launched?: string;
  replacement?: string;
  scope?: string;
  subtitle?: string;
  tags?: string[];
  members?: string[];
  hasResurrection?: boolean;
}

export interface StatusMetric {
  value: string;
  label: string;
  note: string;
  tone: AccentTone;
  icon: 'skull' | 'calendar' | 'clock' | 'undo';
}

export interface CategoryItem {
  name: string;
  count: number;
  tone: AccentTone;
  icon: 'box' | 'zap' | 'code' | 'puzzle' | 'cpu';
  href: string;
}

export const statusMeta: Record<MemorialStatus, { label: string; tone: AccentTone }> = {
  killed: { label: 'Killed', tone: 'red' },
  retired: { label: 'Retired', tone: 'red' },
  deprecated: { label: 'Deprecated', tone: 'yellow' },
  absorbed: { label: 'Absorbed', tone: 'purple' },
  renamed: { label: 'Renamed', tone: 'blue' },
  replaced: { label: 'Replaced', tone: 'purple' },
  scheduled: { label: 'Scheduled', tone: 'yellow' },
  resurrected: { label: 'Resurrected', tone: 'green' },
};

export function formatEventDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00Z`));
}
