
const FeedbackForm = () => {
  return (
    <form className="py-5">
      <label className="py-5 text-lg text-white block">Feedback</label>
      <div className="mb-6">
        <textarea
          rows={5}
          placeholder="Write your feedback"
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

      <div className="mb-10">
        <input
          type="submit"
          value="Submit"
          className="
            w-full
            rounded-md
            border
            bordder-primary
            py-3
            px-5
            bg-primary
            text-base text-white
            cursor-pointer
            hover:bg-opacity-90
            transition
            "
        />
      </div>
    </form>
  );
};

export default FeedbackForm;
