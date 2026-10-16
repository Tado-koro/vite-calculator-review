import { CalcState } from "./CalcState";//Enum
import { Operation } from "./Operation";//Enum
import type { IDisplay } from "./IDisplay";
import { InputBuffer } from "./InputBuffer";
import { Evaluator } from "./Evaluator";
import { NumberFormatter } from "./NumberFormatter";
import { Config } from "./Config";
import type { KeyToken } from "./KeyToken";
import { DivisionByZeroError } from "./DivisionByZeroError";


export class Calculator{
  private state : CalcState;
  private left : number|null;
  private operator : Operation|null;

  constructor(
    state: CalcState,
    left: number|null,
    operator: Operation|null,
    private readonly display : IDisplay,
    private readonly formatter = new NumberFormatter(Config.MAX_DIGITS),
    private readonly evaluator = new Evaluator(),
    private readonly buffer = new InputBuffer(Config.MAX_DIGITS)
){
    this.state = state;
    this.left = left;
    this.operator = operator;
  }

  public handle(token: KeyToken):void{}
  
  handleDigit(d:number):void{
    this.buffer.pushDigit(d);
    this.state = CalcState.InputtingFirst;
    const currentNumber = this.buffer.toNumber();
    const displayText = this.formatter.formatForDisplay(currentNumber);
    this.display.render(displayText);
  }

  
  handleDecimalPoint():void{
    if(this.state == CalcState.ResultShown){
      this.buffer.clear();
    }

    this.buffer.pushDecimal();
    this.state = CalcState.InputtingFirst;
  }


  handleOperator(op:Operation):void{
    if(this.left === null && op === Operation.Subtract){
      this.buffer.pushNegative();
      return;
    }

    if(this.left === null){
      return;
    }
    
    //連続演算の処理
    if(!this.buffer.isEmpty() && this.operator !==null){
      const a = this.left;
      const oldOperator = this.operator;
      const b = this.buffer.toNumber();

      try{
        const result = this.evaluator.compute(a,oldOperator,b);

        if(Number.isNaN(result)){
          this.state = CalcState.Error;
          this.display.renderError("Error");
          this.left = null;
          this.operator = null;
          this.buffer.clear();
          return;
        }

        this.left = result;
        this.buffer.clear();

      }catch(error){
        console.error(error);
        this.display.renderError("Error");
        this.left = null;
        this.operator = null;
        this.buffer.clear();
        this.state = CalcState.Error;
        return;
      }
    }
    this.operator = op;
    this.state = CalcState.OperatorEntered;

  }


  handleEqual():void{
    if(this.left !== null && this.operator !==null){
      const a = this.left;
      const op = this.operator;
      const b = this.buffer.toNumber();
      
      try{
        const result = this.evaluator.compute(a,op,b);

        if(Number.isNaN(result)){
          this.state = CalcState.Error;
          this.display.renderError("Error");
          this.left = null;
          this.operator = null;
          this.buffer.clear();
          return;
        }
        this.left = result;
        this.state = CalcState.ResultShown;
        const displayText = this.formatter.formatForDisplay(result);
        this.display.render(displayText);

      }catch(error){
        this.state = CalcState.Error;

          if(error instanceof DivisionByZeroError){
            console.error(error);
          }

          this.display.renderError("Error");
          this.left = null;
          this.operator = null;
          this.buffer.clear();
      }
    }
  }


  handleClear():void{
    this.left = null;
    this.operator = null;
    this.buffer.clear();
    this.state = CalcState.Ready;
    this.display.render("0");
  }

/*
  handleAllClear():void{}

  handleBackspace():void{}
*/
}

