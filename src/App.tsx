import { AppProvider } from './utils/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//#region import pages
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './views/HomePage/HomePage';
import PropertyAdPage from './views/PropertyAdPage/PropertyAdPage';
import LoginPage from './views/Login/LoginPage';
import ContactPage from './views/Contact/ContactPage';
import UserInfoPage from './views/User/UserInfo/UserInfoPage';

function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ad/all" element={<PropertyAdPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/user" element={<UserInfoPage />} />
          </Routes>
          <Footer />
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
