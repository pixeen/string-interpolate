import interpolate from './interpolate'
import defaultRegex from './defaultRegex'

declare global {
  interface String {
    interpolate(data: { [key: string]: string }, regexp: RegExp): string
  }
}

String.prototype.interpolate = function (
  data: {
    [key: string]: string
  },
  regexp = defaultRegex
): string {
  return interpolate(String(this), data, regexp)
}
