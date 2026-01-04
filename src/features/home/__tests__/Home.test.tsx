import { render, screen } from "@testing-library/react";
import Home from "@/features/home/Home";

describe("ホーム画面", () => {
    it("ホーム画面が表示される", () => {
        render(<Home/>);
        expect(screen.getByText("ホーム画面")).toBeInTheDocument();
    });
    
    it.todo("ホーム画面に「日記一覧」・「カレンダー」へのボタンがある");
});
