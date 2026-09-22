import { CalcState } from "./CalcState";//Enum
import { Operation } from "./Operation";//Enum
import type { IDisplay } from "./IDisplay";
import { InputBuffer } from "./InputBuffer";
import { Evaluator } from "./Evaluator";
import { NumberFormatter } from "./NumberFormatter";
import { KeyMapper } from "./KeyMapper";
import { Config } from "./Config";


export class Calculator implements IDisplay{
  private state : CalcState;
  private left : number|null;
  private operator : Operation|null;
  private buffer : InputBuffer;
  private evaluator : Evaluator;
  private formatter : NumberFormatter;
  private display : IDisplay;

  constructor(
    state: CalcState,
    left: number|null,
    operator: Operation|null,
    buffer : InputBuffer,
    evaluator : Evaluator,
    formatter : NumberFormatter,
    display : IDisplay
  ){
    this.state = state;
    this.left = left;
    this.operator = operator;
    this.buffer = buffer;
    this.evaluator = evaluator;
    this.formatter = formatter;
    this.display = display;
  }

  handleDigit(d:number):void{}

  handleDecimalPoint():void{}

  handleOperator(op:Operation):void{}

  handleEqual():void{}

  handleClear():void{}

  handleAllClear():void{}

  handleBackspace():void{}
}

