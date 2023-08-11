import { AddToList } from "./AddToList"
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Add to list tests", () => {
    it("renders input to add to list", () => {
        render(<AddToList />);
        expect(screen.getByTestId("form_container")).toBeInTheDocument();
    })
})