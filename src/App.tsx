// App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import AnnualAcademicReport from './pages/Reports/AnnualAcademicReport';
import AnnualNonAcademicReport from './pages/Reports/AnnualNonAcademicReport';
import KeyStatisticsTemplate from './pages/Reports/KeyStatisticsReport';


const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={< Dashboard />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/AnnualAcademicReport" element={< AnnualAcademicReport />} />
          <Route path="/AnnualNonAcademicReport" element={< AnnualNonAcademicReport />} />
          <Route path="/KeyStatisticsTemplate" element={< KeyStatisticsTemplate />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
};

export default App;
