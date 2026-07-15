const configuredBase = import.meta.env.BASE_URL;
const baseUrl = configuredBase.endsWith('/') ? configuredBase : `${configuredBase}/`;

export const withBase = (path = '') => `${baseUrl}${path.replace(/^\/+/, '')}`;
