import MyModule2 from "./myModule2";

export default class MyModule {
  constructor( myString ) {
    this.foo = myString;
  }
  bar() {
    return new MyModule2( this.foo );
  }
};
