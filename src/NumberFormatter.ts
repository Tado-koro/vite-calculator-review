import { Calculator } from "./Calculator";

export class NumberFormatter{
  constructor(private readonly maxDigits:number){}

  public formatForDisplay(n:number):string{/*末尾0削除・指数切り替え*/
    if(this.fits(n)===true){
      return n.toString();
    }

    let expoString = "";
    let endExpoString = "";

    for(let k = 0; k < 8; k++){
      expoString =  n.toExponential(k);
      let expoOnlyString = expoString;

      if(expoOnlyString.startsWith("-")){
        expoOnlyString = expoOnlyString.slice(1);
      }
      expoOnlyString =  expoOnlyString.replace('.','');

      if(expoOnlyString.length > 8){
        break;
      }

      endExpoString = expoString;
    }
    return endExpoString;
  }

  fits(n:number):boolean{
    const text = n.toString();
    let textOnlyNumber = text.replace('.','');
    textOnlyNumber = textOnlyNumber.replace('-','');

    if(textOnlyNumber.length > 8){
      return false;
    }
    
    return true;
  }
}