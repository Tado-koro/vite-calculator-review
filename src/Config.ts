export class Config{
  MAX_DIGITS : number;
  ERROR_MESSAGE : string;

  constructor(MAX_DIGITS:number, ERROR_MESSAGE:string){
    this.MAX_DIGITS = MAX_DIGITS;
    this.ERROR_MESSAGE = ERROR_MESSAGE;
  }
}