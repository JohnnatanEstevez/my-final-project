import UserRegister from "./componentes/register";
import UserLogin from "./componentes/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/*       <h1>My final project</h1>
       */}{" "}
      <Router>
        <Routes>
          <Route path="/" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
