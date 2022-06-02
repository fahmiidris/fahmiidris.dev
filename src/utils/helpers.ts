import tinytime from '@/utils/tinytime';

export const formatDate = (date: number, format: string): string => {
  const template = tinytime(format);

  return template.render(new Date(date));
};
