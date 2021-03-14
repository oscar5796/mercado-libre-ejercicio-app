export const formatNumber = (number) => {
  var formatter = new Intl.NumberFormat()
  return formatter.format(number);
}