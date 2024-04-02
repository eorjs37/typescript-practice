"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identify(arg) {
    return arg;
}
function identify2(arg) {
    return arg;
}
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var output = identify2("myString");
console.log(output);
var arr = [1, 2, 3];
var logging = loggingIdentity(arr);
console.log(logging.length);
var myIdentity = identify2;
function logText(text) {
    return text;
}
var str = logText;
var result = str("string");
console.log(result);
function logText2(text) {
    return text;
}
var mystring2 = logText2;
var result2 = mystring2("TTTTTT");
console.log(result2);
exports.default = {};
