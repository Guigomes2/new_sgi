import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext } from "./contexts/autenticação";
import LoginPage from "./pages/LoginPage";
import Cadastro from "./pages/Cadastro";
import Fornecedor from "./pages/Fornecedores/";
import Maps from "./pages/Maps";
import Produtos from "./pages/Produtos";

const Routes = () => {
  const [user, userState] = useState(null);

  return (
    <Router>
      <AuthContext.Provider value={{autenticado: !!user, user, login,}}>
        <Routes>
          <Route exact path="" element={<LoginPage />} />
          <Route exact path="" element={<Maps />} />
          <Route exact path="" element={<Cadastro />} />
          <Route exact path="" element={<Fornecedor />} />
          <Route exact path="" element={<Produto />} />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
};