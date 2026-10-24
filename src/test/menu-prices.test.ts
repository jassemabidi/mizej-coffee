import { describe, expect, it } from "vitest";
import { MENU, formatPrice } from "@/lib/mizej";

function price(name: string) {
  return MENU.flatMap((c) => c.items).find((i) => i.name === name)?.price;
}

describe("Mizej menu prices", () => {
  it("espresso is 3.8 DT", () => expect(price("Espresso")).toBe(3.8));
  it("black smoothie is 14 DT", () => expect(price("Black Smoothie")).toBe(14));
  it("black mojito is 12 DT", () => expect(price("Black Mojito")).toBe(12));
  it("frappuccino caramel is 11.5 DT", () => expect(price("Frappuccino Caramel")).toBe(11.5));
  it("water 1L is 3.5 DT", () => expect(price("Water 1L")).toBe(3.5));
  it("formats prices in DT", () => {
    expect(formatPrice(3.8)).toBe("3.8 DT");
    expect(formatPrice(12)).toBe("12 DT");
  });
});
