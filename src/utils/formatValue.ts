export function formatValue(value: number) {
  if (value >= 1000) return `${Math.floor(value / 1000)}k+`;
  if (value >= 100) return "100+";
  if (value > 50) return "50+";
  if (value < 50) return "<50";
  return value.toString();
}
