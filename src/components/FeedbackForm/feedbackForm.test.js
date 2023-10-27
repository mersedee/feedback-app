import {render, screen, fireEvent} from "@testing-library/react";
import FeedbackForm from "./index";

describe("Test related to the form", () => {
  test("on load from", () => {
    render(<FeedbackForm />);
    const textBox = screen.getByRole("textbox");
    expect(textBox).toBeInTheDocument();

    const checkbox = screen.getByLabelText("I accept terms and conditions", {exact: false});
    expect(checkbox).toBeInTheDocument();

    const btn = screen.getByRole("button", {name: "Submit", exact: false});
    expect(btn).toBeInTheDocument();
    expect(btn).toBeDisabled();
  })

  test("Submit button enabled when checkbox and input has value" , () => {
    render(<FeedbackForm />);
    const textBox = screen.getByPlaceholderText("Enter your feedback");
    const checkbox = screen.getByLabelText("I accept terms and conditions", {exact: false});
    const btn = screen.getByRole("button", {name: "Submit", exact: false});

    fireEvent.change(textBox, {target: {value: "It was great!"}});
    fireEvent.click(checkbox); // check the checkbox

    expect(btn).toBeEnabled();

    fireEvent.click(checkbox); // uncheck the checkbox

    expect(btn).toBeDisabled();

  })
})
