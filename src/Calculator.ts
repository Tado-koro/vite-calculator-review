import { CalcState } from "./CalcState";
import { Operation } from "./Operation";


export class Calculator{
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

