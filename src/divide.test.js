import { describe, expect, it } from "vitest";
import { divide } from "./divide.js";

describe("divide", () => {
  it("divides positive numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("supports negative results", () => {
    expect(divide(-9, 3)).toBe(-3);
  });

  it("returns zero when the numerator is zero", () => {
    expect(divide(0, 5)).toBe(0);
  });

  it("returns zero when the denominator is zero", () => {
    expect(divide(10, 0)).toBe(0);
  });
});
