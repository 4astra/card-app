export function fmt(num: number) {
  return !isNaN(num)
    ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : "";
}
