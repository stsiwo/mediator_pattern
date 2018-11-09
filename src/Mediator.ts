interface IMediator {

  send(request: IRequest): string;

}

class Mediator implements IMediator {

  send(request: IRequest): string {
    // identify a command handler for the command in args
   
    let commandHandler = new request.handlerConstructor(); 
    // call handle of the command handler
    return commandHandler.handle();
  }

}

interface IResponse { }

interface IRequest {
  handlerConstructor: IRequestHandler;
}

interface IRequestHandler {
  
  handle(request: IRequest): string;
}

interface ICommand {

  createCommand(name: string): void;

}

class Command {
  
  readonly handlerConstructor: CommandHandler = CommandHandler;
  name: string;

  createCommand(name: string): void {
    this.name = name;
  }  
}

class CommandHandler {

  handle(request: Command): string {
    return request.name;
  }
}

let mediator: IMediator = new Mediator();
let command: Command = new Command();
command.createCommand("satoshi");
/* let commandHandler: CommandHandler = new CommandHandler(); */

console.log(mediator.send(command));

/* interface HandlerConstructor<T> { */
  /* new(): T; */
/* } */

/* function handlerFactory<T>(c: new () => T): T { */
    /* return new c(); */
/* } */

/* let myHandler = CommandHandler; */
/* var B = new myHandler(); */
/* [>let handler: CommandHandler = handlerFactory(myHandler);<] */
/* console.log(B); */
