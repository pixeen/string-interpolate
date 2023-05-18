/**
 * Interpolate a string with data
 *
 * @param str - string to interpolate
 * @param data - data to interpolate into string
 * @param expr - regular expression to match interpolation keys
 *
 * @returns String with data interpolated
 */

const stringInterpolate = (
  str: string,
  data: Record<string, string>,
  expr = /\{([^}]+)}/g // set default regexp to match single curly braces {key}
): string =>
  str.replace(expr, (match: string, key) =>
    typeof data[key] === 'string' ? data[key] : match
  )

export default stringInterpolate
