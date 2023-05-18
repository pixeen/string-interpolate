const interpolate = (
  str: string,
  data: { [key: string]: string },
  expr = /\{{([^}]+)}}/g
): string =>
  str.replace(expr, (match: string, key) =>
    typeof data[key] === 'string' ? data[key] : match
  )

export default interpolate
