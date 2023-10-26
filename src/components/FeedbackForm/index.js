import {useState} from "react";

const FeedbackForm = ({setFeedbacks}) => {
  const [feedback, setFeedback] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const onChangeFeedback = (e) => setFeedback(e.target.value);
  const onChangeCheckbox = () => setCheckbox(!checkbox);

  const onSubmit = async () => {
    const response = await fetch("http://localhost:3100/save-feedback", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({text: feedback})
    })

    const savedFeedback = await response.json();
    setFeedbacks((prev) => [...prev, savedFeedback]);
    setFeedback("")
  }

  return (
    <form className="py-5">
      <label className="py-5 text-lg text-white block">Feedback</label>
      <div className="mb-3">
        <textarea
          rows={5}
          placeholder="Enter your feedback"
          onChange={onChangeFeedback}
          className="
            w-full
            rounded-md
            border
            bordder-[#E9EDF4]
            py-3
            px-5
            bg-[#FCFDFE]
            text-base text-body-color
            placeholder-[#ACB6BE]
            outline-none
            focus-visible:shadow-none
            focus:border-primary
            "
        />
      </div>

      <div className="flex items-center mb-6">
        <input
          onChange={onChangeCheckbox}
          defaultChecked={checkbox}
          id="checked-checkbox"
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="checked-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          I accept terms and conditions
        </label>
      </div>

      <div className="mb-10">
        <button
          type="button"
          disabled={!feedback || !checkbox}
          onClick={onSubmit}
          className="
            w-full
            rounded-md
            border
            bordder-primary
            py-3
            px-5
            bg-primary
            text-base
            text-white
            cursor-pointer
            hover:bg-opacity-90
            transition
            "
        >Submit</button>
      </div>
    </form>
  );
};

export default FeedbackForm;
