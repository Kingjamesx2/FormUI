// App.tsx
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import AnnualAcademicReport from "./pages/Reports/AnnualAcademicReport";
import AnnualNonAcademicReport from "./pages/Reports/AnnualNonAcademicReport";
import PrivateRoute from "./components/UBPrivateRoute/UBPrivateRoute";
import HumanResourceStatistics from "./pages/Reports/HumanResourceStatistics";
import RecordsAndAdmissions from "./pages/Reports/RecordsAndAdmissions";
import FinanceAndBudgetStatistics from "./pages/Reports/FinanceAndBudgetStatistics";
import { UBFormChecks } from "./components/UBFormChecks/UBFormChecks";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/UBFormChecks" element={<UBFormChecks />} />
          <Route element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route
              path="/AnnualAcademicReport"
              element={<AnnualAcademicReport />}
            />

            <Route
              path="/AnnualNonAcademicReport"
              element={<AnnualNonAcademicReport />}
            />
            <Route
              path="/FinanceAndBudgetStatistics"
              element={<FinanceAndBudgetStatistics />}
            />
            <Route
              path="/HumanResourceStatistics"
              element={<HumanResourceStatistics />}
            />
            <Route
              path="/RecordsAndAdmissions"
              element={<RecordsAndAdmissions />}
            />
          </Route>
          <Route path="/*" element={<Navigate to={'/Login'} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
