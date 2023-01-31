import Home from "./pages/home/Home";
import List from "./pages/list/List";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hotel from "./pages/hotel/Hotel";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/hotels" element={<List/> }></Route>
          <Route path="/hotels/:id" element={<Hotel/>  }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;






















