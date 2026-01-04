import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Diary from "../diary";

describe("Diary", () => {
    it("日付を表示する", () => {
        const diary = render(<Diary date="2026-01-01" content="今日は良い天気でした。" />);
        expect(diary.getByText("2026-01-01")).toBeInTheDocument();
    });

    it("別の日付を表示する", () => {
        const diary = render(<Diary date="2030-12-31" content="雨が降っていました。" />);
        expect(diary.getByText("2030-12-31")).toBeInTheDocument();
    });

    it("日記の内容を表示する #1", () => {
        const diary = render(<Diary date="2026-01-01" content="今日は良い天気でした。" />);
        expect(diary.getByText("今日は良い天気でした。")).toBeInTheDocument();
    });

    it("日記の内容を表示する #2", () => {
        const diary = render(<Diary date="2026-01-02" content="雨が降っていました。" />);
        expect(diary.getByText("雨が降っていました。")).toBeInTheDocument();
    });
});
