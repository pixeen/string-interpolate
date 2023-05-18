import isTypeOfString from './isTypeOfString'

const interpolate = (
  str: string,
  data: { [key: string]: string },
  expr: RegExp
): string =>
  str.replace(expr, (match: string, key) =>
    isTypeOfString(data[key]) ? data[key] : match
  )
export default interpolate
