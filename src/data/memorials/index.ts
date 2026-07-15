import { modelMemorials } from './models';
import { productMemorials } from './products';
import { scheduledMemorials } from './scheduled';

export * from './types';

export const memorials = [...productMemorials, ...modelMemorials, ...scheduledMemorials];

const slugs = memorials.map(({ slug }) => slug);
if (new Set(slugs).size !== slugs.length) {
  throw new Error('Memorial slugs must be unique.');
}
