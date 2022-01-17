import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./screens/SignUp";
import SignUp2 from "./screens/SignUp2";
import Signin from "./screens/Signin";
import Dashboard from "./screens/Dashboard";
import ClientsList from "./screens/ClientsList";
import Conversations from "./screens/Conversations";
// import FinancesIncome from "./screens/FinancesIncome";
// import FormCards from "./screens/FormCards";
// import FinancesExpense from "./screens/FinancesExpense";
// import Inventory from "./screens/Inventory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup-1" element={<SignUp />} />
          <Route path="/signup-2" element={<SignUp2 />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/360" element={<Dashboard />} />
          <Route path="/way" element={<ClientsList />} />
          <Route path="/conversations" element={<Conversations />} />
          {/*   <Route path="/form-cards" element={<FormCards />} />
           <Route path="/finances-income" element={<FinancesIncome />} />
          <Route path="/finances-expense" element={<FinancesExpense />} />
          <Route path="/inventory" element={<Inventory />} /> */}
          <Route path="/" element={<Navigate to="/signup-1" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
