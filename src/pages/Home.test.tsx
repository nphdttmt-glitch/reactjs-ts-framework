import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home component", () => {
    test("renders heading", () => {
        render(<Home />);
        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("🏠 Trang Chủ");
    });

    test("renders welcome message", () => {
        render(<Home />);
        expect(screen.getByText("Chào mừng bạn đến với website ReactJS demo!")).toBeInTheDocument();
    });
});
