import { Calculator } from "./Calculator";

export class InputBuffer{
  constructor(
    private readonly maxDigits: number,
    private value = ""
  ){}

  public pushDigit(d:number):void{}

  public pushDecimal():void{
    if(this.value == ""){
      this.value = "0.";
    }
    if(this.value.includes(".")){
      return;
    }
    this.value = this.value + ".";
  }

  public clear():void{
    this.value = "";
  }

  public toNumber():number{
    return Number(this.value || 0);
  }

  public isEmpty():boolean{
    return this.value.length === 0;
  }

  public digitCount():number{
    return this.value.replace(/[.\-]/g, "").length;
  }
  //桁数評価から記号を除外

  public pushNegative():void{
    if(this.value.startsWith("-")){
      return;
    }
    this.value = "-" + this.value;
  }
}