class Base { }

class Derived { }

interface IEnumerable<T> { }

class List<T> implements IEnumerable<T>{}

let d: IEnumerable<Derived> = new List<Derived>(); 
let b: IEnumerable<Base> = d;


