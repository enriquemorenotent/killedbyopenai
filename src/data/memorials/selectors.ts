import { withBase } from '../../utils/urls';
import { memorials } from '.';
import type { CategoryItem, MemorialRecord, StatusMetric } from './types';

const byNewest = (a: MemorialRecord, b: MemorialRecord) => b.eventDate.localeCompare(a.eventDate);
const bySoonest = (a: MemorialRecord, b: MemorialRecord) => a.eventDate.localeCompare(b.eventDate);

export const graveyardMemorials = memorials.filter(({ section }) => section === 'graveyard').sort(byNewest);
export const modelMemorials = memorials.filter(({ section }) => section === 'models').sort(byNewest);
export const scheduledMemorials = memorials.filter(({ section }) => section === 'death-row').sort(bySoonest);
export const filedMemorials = memorials.filter(({ status }) => status !== 'scheduled');

export const recentMemorials = filedMemorials
  .filter(({ status }) => status !== 'resurrected')
  .sort(byNewest)
  .slice(0, 4);

export const timelineMemorials = [...memorials].sort(byNewest);

export const statusMetrics: StatusMetric[] = [
  {
    value: String(filedMemorials.length),
    label: 'Memorials filed',
    note: 'Source-backed records',
    tone: 'green',
    icon: 'skull',
  },
  {
    value: String(scheduledMemorials.length),
    label: 'On death row',
    note: 'Scheduled, not dead yet',
    tone: 'yellow',
    icon: 'calendar',
  },
  {
    value: String(memorials.filter(({ status }) => ['absorbed', 'renamed', 'replaced'].includes(status)).length),
    label: 'Changed identity',
    note: 'Absorbed, renamed, replaced',
    tone: 'purple',
    icon: 'clock',
  },
  {
    value: String(memorials.filter(({ hasResurrection, status }) => hasResurrection || status === 'resurrected').length),
    label: 'Resurrections',
    note: 'Came back at least once',
    tone: 'blue',
    icon: 'undo',
  },
];

const categoryCount = (records: MemorialRecord[], ...categories: MemorialRecord['category'][]) =>
  records.filter(({ category }) => categories.includes(category)).length;

export const categories: CategoryItem[] = [
  {
    name: 'Products',
    count: categoryCount(graveyardMemorials, 'Product'),
    tone: 'purple',
    icon: 'box',
    href: withBase('graveyard/?category=Product'),
  },
  {
    name: 'Features & tools',
    count: categoryCount(graveyardMemorials, 'Feature', 'Tool'),
    tone: 'green',
    icon: 'zap',
    href: withBase('graveyard/?category=Feature'),
  },
  {
    name: 'APIs',
    count: categoryCount(graveyardMemorials, 'API'),
    tone: 'blue',
    icon: 'code',
    href: withBase('graveyard/?category=API'),
  },
  {
    name: 'Integrations',
    count: categoryCount(graveyardMemorials, 'Integration'),
    tone: 'yellow',
    icon: 'puzzle',
    href: withBase('graveyard/?category=Integration'),
  },
  {
    name: 'Models',
    count: categoryCount(modelMemorials, 'Model'),
    tone: 'pink',
    icon: 'cpu',
    href: withBase('models/'),
  },
];
