import HomePage from "./pages/HomePage/HomePage";
import LikePage from "./pages/LikePage/LikePage";
import { Routes, Route } from "react-router-dom";
import Collection from "./pages/Collection/Collection";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/info:id" element={<LikePage />} />
      </Routes>
    </div>
  );
}
export default App;
