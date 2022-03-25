import HomePage from "./pages/HomePage/HomePage";
import Info from "./pages/Info/Info";
import { Routes, Route } from "react-router-dom";
import Collection from "./pages/Collection/Collection";
import LikePage from "./pages/LikePage/LikePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/info:id" element={<Info />} />
        <Route path="/likepage" element={<LikePage />} />
      </Routes>
    </div>
  );
}
export default App;
