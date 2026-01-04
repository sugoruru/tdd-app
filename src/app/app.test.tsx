import "@testing-library/jest-dom";
import App from "./App";
import { render } from "@testing-library/react";

it("遷移ボタンの表示", () => {
    const rendered = render(<App />);
    const toHomeButton = rendered.getByRole("button", { name: "home" });
    expect(toHomeButton).toBeInTheDocument();
    const toDiariesButton = rendered.getByRole("button", { name: "diaries" });
    expect(toDiariesButton).toBeInTheDocument();
    const toCalendarButton = rendered.getByRole("button", { name: "calendar" });
    expect(toCalendarButton).toBeInTheDocument();
});
