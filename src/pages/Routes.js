import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Cadastro from "./pages/Cadastro";

const Routes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
};
