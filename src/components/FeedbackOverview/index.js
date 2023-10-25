
const FeedbackOverview = ({list= []}) => {
  return (
    <div className="flex flex-col py-5 text-white">
      <label className="py-5 text-lg">Reviews</label>
      <div className="flex bg-gray-600 bg-opacity-20 border border-gray-200 rounded-md">
        <ion-icon class="py-4 p-3" name="search-outline"></ion-icon>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Review"
          className="p-2 bg-transparent focus:outline-none"
        />
      </div>

      {list.length === 0 ? (
        <div className="text-white text-center mt-14">There is no feedback</div>
      ):(
        <ul className="flex flex-col gap-3 mt-14">
          {list.map((feedback) => (
            <li key={feedback.id} className="flex flex-col gap-4 bg-gray-700 p-4">
              <div className="flex gap-2">
                <div className="w-7 h-7 text-center rounded-full bg-red-500">J</div>
                <span>Jess Hopkins</span>
              </div>

              <div>{feedback.text}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackOverview;
