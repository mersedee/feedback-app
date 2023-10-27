import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Feedback Test", () => {
  test("Feedback should display after submit.", async () => {
    render(<App/>);
    const textBox = screen.getByLabelText("Feedback", {exact: false});
    const checkbox = screen.getByLabelText("I accept terms and conditions", {exact: false});
    const btn = screen.getByRole("button", {name: "Submit", exact: false});

    await userEvent.type(textBox, "new feedback");
    await userEvent.click(checkbox);
    await userEvent.click(btn);

    const newFeedback = await screen.findByText("new feedback", {exact: false});

    expect(newFeedback).toBeInTheDocument();
  })

  test.skip("Two Feedback should display after submit.", async () => {
    render(<App/>);
    const textBox = screen.getByLabelText("Feedback", {exact: false});
    const checkbox = screen.getByLabelText("I accept terms and conditions", {exact: false});
    const btn = screen.getByRole("button", {name: "Submit", exact: false});

    await userEvent.type(textBox, "new feedback");
    await userEvent.click(checkbox);
    await userEvent.click(btn);

    await userEvent.clear(textBox);

    await userEvent.type(textBox, "another feedback");
    await userEvent.click(btn);

    const feedbackList = await screen.findAllByRole("listitem");
    expect(feedbackList).toBe(2);
  })
})
