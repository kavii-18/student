import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./pages/Home";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
//import NotFound from "./pages/NotFound";

const App = () => (
  <Router>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/add-student" element={<AddStudent />} />
      <Route path="/edit-student/:id" element={<EditStudent />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </Router>
);

export default App;
