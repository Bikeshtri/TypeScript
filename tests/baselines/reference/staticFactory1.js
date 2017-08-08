//// [staticFactory1.ts]
class Base {
    foo() { return 1; }
    static create() {
        return new this();
    }
}

class Derived extends Base {
    foo() { return 2; }
}
var d = Derived.create(); 

d.foo();  

//// [staticFactory1.js]
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = (function () {
    function Base() {
    }
    Base.prototype.foo = function () { return 1; };
    Base.create = function () {
        return new this();
    };
    __names(Base.prototype, ["foo"]);
    return Base;
}());
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived.prototype.foo = function () { return 2; };
    __names(Derived.prototype, ["foo"]);
    return Derived;
}(Base));
var d = Derived.create();
d.foo();
