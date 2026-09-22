import type { KeyToken } from "./KeyToken";

export class KeyMapper{
  private KeyMap : Map<string, KeyToken>;

  constructor(){
    this.KeyMap = new Map<string, KeyToken>();
  }

  resolve(target:EventTarget):KeyToken|null{
    return 0;
  }
}