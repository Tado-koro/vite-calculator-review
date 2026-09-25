import type { Operation } from "./Operation";

export type KeyToken = 
  | {kind:"digit"; value:0}
  | {kind:"digit"; value:1}
  | {kind:"digit"; value:2}
  | {kind:"digit"; value:3}
  | {kind:"digit"; value:4}
  | {kind:"digit"; value:5}
  | {kind:"digit"; value:6}
  | {kind:"digit"; value:7}
  | {kind:"digit"; value:8}
  | {kind:"digit"; value:9}
  | {kind:"op"; value:Operation.Add}
  | {kind:"op"; value:Operation.Subtract}
  | {kind:"op"; value:Operation.Multiply}
  | {kind:"op"; value:Operation.Divide}
  | {kind:"equal"}
  | {kind:"clear"}
  | {kind:"decimal"};