import { Calculator } from "./Calculator";

export class InputBuffer{
  private value : string;
  private maxDigits : number;

  constructor(value:string, maxDigits:number){
    this.value = value;
    this.maxDigits = maxDigits;
  }

  pushDigit(d:number):void{}

  pushDecimal():void{}

  clear():void{}

  toNumber():number{}

  isEmpty():boolean{}

  digitCount():number{}
}