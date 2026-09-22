import { Calculator } from "./Calculator";

export class NumberFormatter{
  private maxDigits : number;

  constructor(maxDigits:number){
    this.maxDigits = maxDigits;
  }

  formatForDisplay(n:number):string{}

  fits(n:number):boolean{}
}