import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./screens/SignUp";
import SignUp2 from "./screens/SignUp2";
import Signin from "./screens/Signin";
import Dashboard from "./screens/Dashboard";
import ClientsList from "./screens/ClientsList";
import FinancesIncome from "./screens/FinancesIncome";
import Conversations from "./screens/Conversations";
import FormCards from "./screens/FormCards";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup-1" element={<SignUp />} />
          <Route path="/signup-2" element={<SignUp2 />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clients-list" element={<ClientsList />} />
          <Route path="/finances-income" element={<FinancesIncome />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="/form-cards" element={<FormCards />} />
          <Route path="/" element={<Navigate to="/signup-1" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
