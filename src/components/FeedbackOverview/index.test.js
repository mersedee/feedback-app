import {render, screen} from "@testing-library/react";
import FeedbackOverview from "./index";

describe("Test related to feedback list", () => {
  test("Displays message when there's no feedback", () => {
    render(<FeedbackOverview list={[]} />)
    const noFeedbackMsg = screen.getByText("There is no feedback", {exact: false})
    expect(noFeedbackMsg).toBeInTheDocument();
  })

  test("Feedback overview", ()=> {
    render(<FeedbackOverview list={[
      {id: "1", text: "It is great"},
      {id: "2", text: "I like it"},
    ]} />)

    const noFeedbackMsg = screen.queryByTestId("There is no feedback", {exact: false});
    expect(noFeedbackMsg).not.toBeInTheDocument();

    const feedbackList = screen.getAllByRole("listitem");
    expect(feedbackList.length).toBe(2);
  })
})
