import React from "react";
import { CardHolder } from "./CardHolder";
import { CardState } from "./CardState";

describe("Test CardHolder", () => {
  const cardHolder: CardHolder = {
    cardType: undefined,
    cardNumber: "4444 4444 4444 4444",
    goodThrough: "",
    cvvCode: 120,
    holderName: "HELLO WORLD",
  };
  it("cvvCode default is zero", async () => {
    expect(cardHolder.cvvCode.toString().length).toEqual(3);
  });
  it("holdername is valid", async () => {
    expect(cardHolder.holderName.length).toBeGreaterThan(5);
  });
  it("cardnumber is valid", async () => {
    expect(cardHolder.cardNumber.replace(/\s/g, '').trim().length).toEqual(16);
  });
});
