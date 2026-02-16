export function truncate(str: string, length: number): string {
  if (!str) return '';
  return str.length > length ? str.slice(0, length) + '...' : str;
}
