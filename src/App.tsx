// App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import AnnualAcademicReport from './pages/Reports/AnnualAcademicReport';
import AnnualNonAcademicReport from './pages/Reports/AnnualNonAcademicReport';
import KeyStatisticsTemplate from './pages/Reports/KeyStatisticsReport';


const App: React.FC = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<div>Home Page</div>} />
    //     <Route path="/annual-academic-report" element={<AnnualAcademicReport />} />
    //     <Route path="/annual-non-academic-report" element={<AnnualNonAcademicReport />} />
    //     <Route path="/key-statistics-report" element={<KeyStatisticsTemplate />} />
    //   </Routes>
    // </Router>
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={< Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
};

export default App;
