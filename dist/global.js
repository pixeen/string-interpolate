import interpolate from './interpolate'
import defaultRegex from './defaultRegex'
String.prototype.interpolate = function (data, regexp) {
  if (regexp === void 0) {
    regexp = defaultRegex
  }
  return interpolate(String(this), data, regexp)
}
//# sourceMappingURL=global.js.map
