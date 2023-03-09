import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import StandardLayout from "./layout/StandardLayout";
import Details from "./routes/Details";
import Titles from "./routes/Titles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StandardLayout />}>
          <Route index element={<Titles />} />
          <Route path="/details/:titleNumber" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
