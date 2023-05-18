"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interpolate = function (str, data, expr) {
    return str.replace(expr, function (match, key) {
        return (typeof data[key] === 'string') ? data[key] : match;
    });
};
exports.default = interpolate;
//# sourceMappingURL=interpolate.js.map