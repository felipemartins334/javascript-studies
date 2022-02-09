import { SomeObject } from "./symbols.js";

SomeObject.increment()

//to access a symbol we need to involve it with []
//Or its accessible with getOwnPropertySymbols
const properties = (Object.getOwnPropertyNames(SomeObject))
for(const property of properties){
}
