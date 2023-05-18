/**
 * Interpolates a given string `str` by replacing placeholders with corresponding values from the provided object `data`.
 *
 * @param {string} str The input string to be interpolated.
 * @param {Record<string, string> | Array<string>} data An object containing key-value pairs, where each key corresponds to a placeholder in the input string and its value is used to replace the placeholder.
 * @param {RegExp} [expr=/\{([^}]+)}/g] An optional regular expression pattern that determines how the placeholders are matched. The default pattern matches single curly braces {key}.
 * @returns {string} The interpolated string with replaced placeholders.
 */
const stringInterpolate = (
  str: string,
  data: Record<string, string>,
  expr = /\{([^}]+)}/g
): string => {
  return str.replace(expr, (match: string, key) =>
    typeof data[key] === 'string' ? data[key] : match
  )
}

export default stringInterpolate
