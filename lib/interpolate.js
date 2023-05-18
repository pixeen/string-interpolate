"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isTypeOfString_1 = __importDefault(require("./isTypeOfString"));
var interpolate = function (str, data, expr) {
    return str.replace(expr, function (match, key) {
        return (0, isTypeOfString_1.default)(data[key]) ? data[key] : match;
    });
};
exports.default = interpolate;
//# sourceMappingURL=interpolate.js.map