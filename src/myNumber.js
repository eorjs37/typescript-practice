"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNumber = void 0;
var MyNumber = /** @class */ (function () {
    function MyNumber(value) {
        this.value = value;
    }
    MyNumber.prototype.add = function (other) {
        return new MyNumber(this.value + other);
    };
    MyNumber.prototype.subtract = function (other) {
        return new MyNumber(this.value - other);
    };
    MyNumber.prototype.times = function (other) {
        return new MyNumber(this.value * other);
    };
    MyNumber.prototype.divide = function (other) {
        return new MyNumber(this.value / other);
    };
    MyNumber.prototype.equals = function (other) {
        return this.value === other;
    };
    return MyNumber;
}());
exports.MyNumber = MyNumber;
