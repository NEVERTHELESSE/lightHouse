export function formatNumber(number: string) {
  const format1 = number.slice(0, 3);
  const format2 = number.slice(4, 6);
  const format3 = number.slice(7, 9);
  return `+234 ${format1}  ${format2} ${format3}`;
}
