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

  handleDecimalPoint():void{}

  handleOperator(op:Operation):void{}

  handleEqual():void{
    if(this.left !== null && this.operator !==null){
      const a = this.left;
      const op = this.operator;
      const b = this.buffer.toNumber();
      
      try{
        const result = this.evaluator.compute(a,op,b);
        this.left = result;
        this.state = CalcState.ResultShown;
        const displayText = this.formatter.formatForDisplay(result);
        this.display.render(displayText);
      }catch(error){
        this.state = CalcState.Error;
          if(error instanceof DivisionByZeroError){
            this.display.renderError("エラー");
            console.error(error);
            this.left = null;
            this.operator = null;
            this.buffer.clear();
            }
      }
    }
  }

  handleClear():void{}

  handleAllClear():void{}

  handleBackspace():void{}
}

