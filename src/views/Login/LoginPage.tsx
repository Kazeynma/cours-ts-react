import LoginForm from '../../components/form/LoginForm';

//#region import style
import './LoginPage.css';
import couverture from '../../assets/couverture-login.jpg';

const LoginPage = () => {
  return (
    <>
      <div className="login-container">
        <div className="img-container">
          <img src={couverture} alt="cover login page" className="img-cover" />
        </div>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
