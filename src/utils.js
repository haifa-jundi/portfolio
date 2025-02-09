export const getAssetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

export const createDynamicAssetGetter = (baseUrl) => (path) => `${baseUrl}${path}`;