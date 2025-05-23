const trimify = (value: string): string =>
  value?.replace(/\n\n\s*\n/g, "\n\n").trim();

export default trimify;
