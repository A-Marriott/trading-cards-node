import { getByText, render } from '@testing-library/react';
import App from './App';

describe("it displays players information", () => {
  it("it displays health", async () => {
    render(<App />);
    expect(getByText("30")).toBeVisible()
  });
});
