//// [tests/cases/conformance/dynamicImport/importCallExpressionES5UMD.ts] ////

//// [0.ts]
export function foo() { return "foo"; }

//// [1.ts]
import("./0");
var p1 = import("./0");
p1.then(zero => {
    return zero.foo();
});

export var p2 = import("./0");

function foo() {
    const p2 = import("./0");
}

class C {
    method() {
        const loadAsync = import ("./0");
    }
}

export class D {
    method() {
        const loadAsync = import ("./0");
    }
}

//// [0.js]
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function foo() { return "foo"; }
    exports.foo = foo;
});
//// [1.js]
var __names = (this && this.__names) || (function() {
    var name = Object.defineProperty ? (function(proto, name) {
        Object.defineProperty(proto[name], 'name', { 
            value: name, configurable: true
        });
    }) : (function(proto, name) {
        proto[name].name = name;
    });
    return function (proto, keys) {
        for (var i = keys.length - 1; i >= 0; i--) {
            name(proto, keys[i])
        }
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var __syncRequire = typeof module === "object" && typeof module.exports === "object";
    Object.defineProperty(exports, "__esModule", { value: true });
    __syncRequire ? Promise.resolve().then(function () { return require("./0"); }) : new Promise(function (resolve_1, reject_1) { require(["./0"], resolve_1, reject_1); });
    var p1 = __syncRequire ? Promise.resolve().then(function () { return require("./0"); }) : new Promise(function (resolve_2, reject_2) { require(["./0"], resolve_2, reject_2); });
    p1.then(function (zero) {
        return zero.foo();
    });
    exports.p2 = __syncRequire ? Promise.resolve().then(function () { return require("./0"); }) : new Promise(function (resolve_3, reject_3) { require(["./0"], resolve_3, reject_3); });
    function foo() {
        var p2 = __syncRequire ? Promise.resolve().then(function () { return require("./0"); }) : new Promise(function (resolve_4, reject_4) { require(["./0"], resolve_4, reject_4); });
    }
    var C = (function () {
        function C() {
        }
        C.prototype.method = function () {
            var loadAsync = __syncRequire ? Promise.resolve().then(function () { return require("./0"); }) : new Promise(function (resolve_5, reject_5) { require(["./0"], resolve_5, reject_5); });
        };
        __names(C.prototype, ["method"]);
        return C;
    }());
    var D = (function () {
        function D() {
        }
        D.prototype.method = function () {
            var loadAsync = __syncRequire ? Promise.resolve().then(function () { return require("./0"); }) : new Promise(function (resolve_6, reject_6) { require(["./0"], resolve_6, reject_6); });
        };
        __names(D.prototype, ["method"]);
        return D;
    }());
    exports.D = D;
});
