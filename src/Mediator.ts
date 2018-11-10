interface IMediator {

  send(request: IRequest): string;

}

interface IRequest { 

  handlerConstructor: Function;

  name: string;

  createRequest(prop: string): void;
}

interface IRequestHandler {
  
  handle(request: IRequest): string;

}

class Mediator implements IMediator {

  send(request: IRequest) {
    // identify a command handler from request's property, handlerConstructor
    let handler: IRequestHandler = Reflect.construct(request.handlerConstructor, []);
    // call the handler's handle method
    return handler.handle(request);
  }
}

class CommandA implements IRequest {

  handlerConstructor: Function = CommandAHandler;

  name: string;

  createRequest(name: string) {
    this.name = name;
  }
}

class CommandAHandler implements IRequestHandler {

  handle(request: IRequest) {
    return request.name;
  }
}

class CommandB implements IRequest {

  handlerConstructor: Function = CommandAHandler;

  name: string;

  createRequest(name: string) {
    this.name = name;
  }
}

class CommandBHandler implements IRequestHandler {

  handle(request: IRequest) {
    return request.name;
  }
}

class CommandC implements IRequest {

  handlerConstructor: Function = CommandAHandler;

  name: string;

  createRequest(name: string) {
    this.name = name;
  }
}

class CommandCHandler implements IRequestHandler {

  handle(request: IRequest) {
    return request.name;
  }
}

let mediator: IMediator = new Mediator();
let ca: IRequest = new CommandA();
ca.createRequest("satoshi");
let cb: IRequest = new CommandA();
cb.createRequest("hitomi");
let cc: IRequest = new CommandA();
cc.createRequest("kaoru");

console.log(mediator.send(ca));
console.log(mediator.send(cb));
console.log(mediator.send(cc));


