const isValid = require("../1");

describe("isValid", () => {
  it("should return true for basic valid brackets", () => {
    expect(isValid("[]")).toBe(true);
    expect(isValid("{}")).toBe(true);
    expect(isValid("()")).toBe(true);
  });

  it("should return true for multiple consecutive valid brackets", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  it("should return true for nested valid brackets", () => {
    expect(isValid("([{}])")).toBe(true);
  });

  it("should return false for incorrectly paired brackets", () => {
    expect(isValid("([)]")).toBe(false);
  });

  it("should return false for single opening bracket", () => {
    expect(isValid("[")).toBe(false);
  });

  it("should return false for single closing bracket", () => {
    expect(isValid("]")).toBe(false);
  });

  it("should handle empty string correctly", () => {
    expect(isValid("")).toBe(true);
  });
});
