import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppKeyProvider, AppKeyContext } from './context/AppKeyContext';
import One from "./pages/One";
import Two from "./pages/Two";
import Login from "./pages/Login";
import BusinessInfo from "./pages/BusinessInfo";
import IndustryInfo from "./pages/IndustryInfo";
import Settings from "./pages/Settings";
import SettingsLayout from "./components/SettingsLayout";
import { ProgressProvider } from './context/ProgressContext';
import Signup from "./pages/Signup";
import DashboardLayout from "./components/DashboardLayout";
import HomeComponent from "./components/HomeComponent";
import KYC from "./pages/KYC";
import { useContext } from 'react';

function AppContent() {
  const { appKey } = useContext(AppKeyContext);

  if (!appKey) {
    return <div>Page Loading...</div>; 
  }

  return (
    <Router>
      <Routes>
        {/* home */}
        <Route path="/" element={<HomeComponent />} />

        {/* auth */}
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="business_info" element={<BusinessInfo />} />
          <Route path="industry_info" element={<IndustryInfo />} />
          <Route path="password-reset">
            <Route path=":id" element={<One text="reset" />} />
          </Route>
        </Route>

        {/* KYC route */}
        <Route path="kyc" element={<DashboardLayout page="kyc" />}>
          <Route index element={<KYC />} />
        </Route>

        {/* Dashboard route */}
        <Route path="dashboard" element={<DashboardLayout page="dashboard" />}>
          <Route index element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <div className="App">
      <AppKeyProvider>
        <ProgressProvider>
          <AppContent />
        </ProgressProvider>
      </AppKeyProvider>
    </div>
  );
}

export default App;
