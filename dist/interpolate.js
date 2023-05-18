var interpolate = function (str, data, expr) {
  if (expr === void 0) {
    expr = /\{{([^}]+)}}/g
  }
  return str.replace(expr, function (match, key) {
    return typeof data[key] === 'string' ? data[key] : match
  })
}
export default interpolate
//# sourceMappingURL=interpolate.js.map
