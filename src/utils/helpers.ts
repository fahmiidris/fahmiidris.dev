import tinytime from '@/utils/tinytime';

export const formatDate = (date: number, format: string) => {
  const { render } = tinytime(format);

  return render(new Date(date));
};

export const sortDateDesc = (a: number, b: number) => {
  if (a > b) return -1;
  if (a < b) return 1;

  return 0;
};
