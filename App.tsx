import React from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import UserProfile from './pages/UserProfile';
import ClinicLocator from './pages/ClinicLocator';
import ClinicDetail from './pages/ClinicDetail';
import DoctorDirectory from './pages/DoctorDirectory';
import DoctorProfile from './pages/DoctorProfile';
import Teleconsultation from './pages/Teleconsultation';
import AdoptionDiscovery from './pages/AdoptionDiscovery';
import PetDetail from './pages/PetDetail';
import ShelterProfile from './pages/ShelterProfile';
import ChatList from './pages/ChatList';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen w-full flex justify-center bg-gray-100">
        <div className="w-full max-w-md bg-background-light dark:bg-background-dark min-h-screen shadow-2xl overflow-hidden relative font-display">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/clinics" element={<ClinicLocator />} />
            <Route path="/clinics/:id" element={<ClinicDetail />} />
            <Route path="/specialists" element={<DoctorDirectory />} />
            <Route path="/specialists/:id" element={<DoctorProfile />} />
            <Route path="/consultation/:id" element={<Teleconsultation />} />
            <Route path="/adopt" element={<AdoptionDiscovery />} />
            <Route path="/adopt/:id" element={<PetDetail />} />
            <Route path="/shelter/:id" element={<ShelterProfile />} />
            <Route path="/chat" element={<ChatList />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;