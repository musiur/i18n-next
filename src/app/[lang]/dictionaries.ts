import 'server-only';

const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  bn: () => import('@/dictionaries/bn.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  const dictionaryFn = dictionaries[`${locale ? locale : "en"}`];
  try {
    return await dictionaryFn();
  } catch (error) {
    throw new Error(`Error while loading dictionary for locale 'sw.js' not found!`);
  }
};
