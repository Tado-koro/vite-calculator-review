import { Calculator } from "./Calculator";
import { DivisionByZeroError } from "./DivisionByZeroError";
import { Operation } from "./Operation";

export class Evaluator{
  public compute(a:number, op:Operation, b:number):number{
    switch(op){
      case Operation.Add:
        return a + b;
      case Operation.Subtract:
        return a - b;
      case Operation.Multiply:
        return a * b;
      case Operation.Divide:
        if(b===0){
          throw new DivisionByZeroError("Divide by zero");
        }
        return a / b;
    }
  }
}