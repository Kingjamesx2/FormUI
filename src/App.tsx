// App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import AnnualAcademicReport from './pages/Reports/AnnualAcademicReport';
import AnnualNonAcademicReport from './pages/Reports/AnnualNonAcademicReport';
import KeyStatisticsTemplate from './pages/Reports/KeyStatisticsReport';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={< Dashboard />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/AnnualAcademicReport" element={< AnnualAcademicReport />} />
          <Route path="/AnnualNonAcademicReport" element={< AnnualNonAcademicReport />} />
          <Route path="/KeyStatisticsTemplate" element={< KeyStatisticsTemplate />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
};

export default App;
