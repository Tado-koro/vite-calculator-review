import {describe, it, expect} from "vitest";
import {NumberFormatter} from "../src/NumberFormatter";

describe("NumberFormatter", ()=>{
  const formatter= new NumberFormatter(8);

  it("8桁の数値は通常表記になる", ()=>{
    expect(formatter.formatForDisplay(12345678)).toBe("12345678");
  });

  it("9桁の数値は指数表記になる", ()=>{
    expect(formatter.formatForDisplay(123456789)).toBe("1.2346e+8");
  });

  it("負の9桁の数値も指数表記になる", ()=>{
    expect(formatter.formatForDisplay(-123456789)).toBe("-1.2346e+8");
  });

  it("少数は通常表記になる", ()=>{
    expect(formatter.formatForDisplay(123.456)).toBe("123.456");
  });

  it("整数は不要な小数点や0を表示しない", ()=>{
    expect(formatter.formatForDisplay(123)).toBe("123");
  })
})