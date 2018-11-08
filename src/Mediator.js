var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Component = /** @class */ (function () {
    function Component(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }
    return Component;
}());
var Mediator = /** @class */ (function () {
    function Mediator() {
        this.components = [];
    }
    Mediator.prototype.addComponent = function (component) {
        this.components.push(component);
    };
    Mediator.prototype.sendMessage = function (message, component) {
        this.components.map(function (comp) {
            if (comp !== component)
                return comp.receive(message);
        });
    };
    return Mediator;
}());
var myComponent = /** @class */ (function (_super) {
    __extends(myComponent, _super);
    function myComponent(name, mediator) {
        return _super.call(this, name, mediator) || this;
    }
    myComponent.prototype.send = function (message) {
        this.mediator.sendMessage(this.name + ": " + message, this);
    };
    myComponent.prototype.receive = function (message) {
        console.log(message);
    };
    return myComponent;
}(Component));
var mediator = new Mediator();
var comp1 = new myComponent("satoshi", mediator);
var comp2 = new myComponent("kaoru", mediator);
var comp3 = new myComponent("hitormi", mediator);
console.log(comp1.send("hey everyone"));
