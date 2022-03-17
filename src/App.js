import Register from "./componentes/register";
import Login from "./componentes/login";
import Todos from "./componentes/todos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todos" element={<Todos />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
