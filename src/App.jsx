import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./screens/SignUp";
import SignUp2 from "./screens/SignUp2";
import Signin from "./screens/Signin";
import Dashboard from "./screens/Dashboard";
import ClientsList from "./screens/ClientsList";
import Conversations from "./screens/Conversations";
import FinancesIncome from "./screens/FinancesIncome";
import FinancesExpense from "./screens/FinancesExpense";
import Inventory from "./screens/Inventory";
import FormCards from "./screens/FormCards";
import FinancesOverview from "./screens/FinancesOverview";
import Settings1 from "./screens/Settings1";
import Settings2 from "./screens/Settings2";
import Settings3 from "./screens/Settings3";
import Settings4 from "./screens/Settings4";
import WorkshopRealtime from "./screens/WorkshopRealtime";

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
          <Route path="/finances-income" element={<FinancesIncome />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="finances-overview" element={<FinancesOverview />} />
          <Route path="finances-expense" element={<FinancesExpense />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/form-cards" element={<FormCards />} />
          <Route path="/settings" element={<Settings1 />} />
          <Route path="/business-settings" element={<Settings2 />} />
          <Route path="/users" element={<Settings3 />} />
          <Route path="/billing" element={<Settings4 />} />
          <Route path="/workshop-realtime" element={<WorkshopRealtime />} />
          <Route path="/" element={<Navigate to="/signup-1" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
