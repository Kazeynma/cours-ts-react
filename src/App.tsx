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
import UserHomePage from './views/User/UserHomePage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ad/all" element={<PropertyAdPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/user/home" element={<UserHomePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
