import {useState} from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackOverview from "./components/FeedbackOverview";

import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  return (
    <div className="App">
      <div className="flex bg-gray-950 min-h-screen">
        <div className="w-1/2 px-10">
          <FeedbackForm setFeedbacks={setFeedbacks} />
        </div>
        <div className="w-1/2 min-h-screen bg-gray-800 px-10">
          <FeedbackOverview list={feedbacks} />
        </div>
      </div>
    </div>
  );
}

export default App;
