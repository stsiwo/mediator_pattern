interface IMediator {

  sendMessage(message: string, component: Component): void;

  addComponent(component: Component): void;
}

abstract class ComponentABS {

  protected name: string;

  protected mediator: IMediator;

  constructor(name: string, mediator: IMediator) {
    this.name = name;
    this.mediator = mediator;
  }

  abstract send(message: string): void;

  abstract receive(message: string): void;

}

class Mediator implements IMediator {

  private components: Array<Component>;

  constructor() {
    this.components = [];
  }

  sendMessage(message: string, component: Component): void {
    this.components.map(( comp ) => {
      if (comp !== component) return comp.receive(message);
    });
  }

  addComponent(component: Component): void {
    this.components.push(component);
  }
}

class Component extends ComponentABS {

  constructor(name: string, mediator: IMediator) {
    super(name, mediator);
  }

  send(message: string): void {
    this.mediator.sendMessage(`${this.name}: ${message}`, this);
  }

  receive(message: string): void {
    console.log(`${this.name} received: ${message}`);
  }
}

let mediator: IMediator = new Mediator();
let satoshi: ComponentABS = new Component("satoshi", mediator);
let hitomi: ComponentABS = new Component("hitomi", mediator);
let kaoru: ComponentABS = new Component("kaoru", mediator);
mediator.addComponent(satoshi);
mediator.addComponent(hitomi);
mediator.addComponent(kaoru);

satoshi.send("hey. everyone");

