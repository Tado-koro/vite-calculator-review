import { Calculator } from "./Calculator";

export class NumberFormatter{
  constructor(private readonly maxDigits:number){}

  public formatForDisplay(n:number):string{/*末尾0削除・指数切り替え*/
    return "仮";
  }

  fits(n:number):boolean{}
}