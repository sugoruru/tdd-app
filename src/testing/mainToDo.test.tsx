import "@testing-library/jest-dom";
import Home from "@/features/home/Home";
import { render, screen } from "@testing-library/react";

describe("シーンの分割をする", () => {
    it.todo("「ホーム画面」・「日記一覧」・「カレンダー」のボタンを設置");
    it.todo("「ホーム画面」:/")
    it.todo("「日記一覧」:/diaries?...");
    it.todo("「カレンダー」:/calendar");
})

describe("ホーム画面", () => {
    it("ホーム画面が表示される", () => {
        render(<Home/>);
        expect(screen.getByText("ホーム画面")).toBeInTheDocument();
    });
    
    it.todo("ホーム画面に「日記一覧」・「カレンダー」へのボタンがある");
});