import { CalcState } from "./CalcState";//Enum
import { Operation } from "./Operation";//Enum
import type { IDisplay } from "./IDisplay";
import { InputBuffer } from "./InputBuffer";
import { Evaluator } from "./Evaluator";
import { NumberFormatter } from "./NumberFormatter";
import { Config } from "./Config";
import type { KeyToken } from "./KeyToken";


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
  }

  handleDecimalPoint():void{}

  handleOperator(op:Operation):void{}

  handleEqual():void{}

  handleClear():void{}

  handleAllClear():void{}

  handleBackspace():void{}
}

