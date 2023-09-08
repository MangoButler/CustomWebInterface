export class Attributes<T extends object> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}

// you can create a type out of a string
// type BestName = 'James'
// all keys on Objects in js are strings even if put as a number

//thus the key of an object can be a type as well

//basically what wee are doing with the K constraint we are saying that the only possible types of K are the Keys of the T generic
// so if we put in a type of UserProps into the T generic then K can only be a string that is either called name, age or id
// the return type T[K] means that the type the the get function returns must be whatever the type of T is for the value of the K key

// const attr = new Attributes<UserProps>({
//   age: 22,
//   name: 'james',
//   id: 5
// })

// const id = attr.get('id');
// const name = attr.get('name');
// const age = attr.get('age');
