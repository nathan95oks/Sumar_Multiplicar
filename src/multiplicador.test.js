import multiplicar from "./multiplicador.js";

describe("multiplicar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
});
