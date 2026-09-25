//0除算
export class DivisionByZeroError extends Error{
  message : string;

  constructor(message:string){
    super();
    this.message = message;
  }
}