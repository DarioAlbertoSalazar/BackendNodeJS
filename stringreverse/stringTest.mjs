import { expect } from "chai";
import StringReverse from "./app.mjs";

describe("StringReverser", function () {
  let stringReverse;
  beforeEach(function () {
    stringReverse = new StringReverse();
  });
  it("reverses a string", function () {
    expect(stringReverse.reverse("hello")).to.equal("olleh");
  });
  it("reverses a string with mixed case correctly", function () {
    expect(stringReverse.reverse("Hola")).to.equal("aloh");
  });
  it("returns a -1 when given an empty string", function () {
    expect(stringReverse.reverse("")).to.equal(-1);
  });
});
