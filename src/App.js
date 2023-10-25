import FeedbackForm from "./components/FeedbackForm";
import FeedbackOverview from "./components/FeedbackOverview";

import "./App.css";

const initialOverviews = [
  {id: "1", text: "Gorgeous design! Even more responsive than the previous version. A pleasure to use!"},
  {id: "2", text: "The device has a clean design and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at."},
]

function App() {
  return (
    <div className="App">
      <div className="flex bg-gray-950 min-h-screen">
        <div className="w-1/2 px-10">
          <FeedbackForm />
        </div>
        <div className="w-1/2 min-h-screen bg-gray-800 px-10">
          <FeedbackOverview list={initialOverviews} />
        </div>
      </div>
    </div>
  );
}

export default App;
