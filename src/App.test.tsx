import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

test("counter increases after user clicks the button", async () => {
  const app = render(<App />);

  const button = app.getByTestId("increase-counter");
  const counterValue = app.getByTestId("counter-value");
  await button.click();

  expect(counterValue.innerHTML).toBe("count is 1");
  app.unmount();
});

test("counter decreases after user clicks the button", async () => {
  const app = render(<App />);

  const button = app.getByTestId("decrease-counter");
  const counterValue = app.getByTestId("counter-value");
  await button.click();

  expect(counterValue.innerHTML).toBe("count is -1");
  app.unmount();
});

test("counter increases after multiple clicks", async () => {
  const app = render(<App />);

  const button = app.getByTestId("increase-counter");
  const counterValue = app.getByTestId("counter-value");

  for (let i = 1; i <= 10; i++) {
    await button.click();
    expect(counterValue.innerHTML).toBe(`count is ${i}`);
  }

  app.unmount();
});
