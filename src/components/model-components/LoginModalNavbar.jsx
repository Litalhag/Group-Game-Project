import './LoginModalNavbar.css';

const LoginModalNavbar = () => {
  return (
    <div className="just-flex navbar">
      <button id="back-btn">
        <img src="./assets/images/modal-header/Back-Button.png" alt="" />
      </button>
      <button id="my-account" className="login-btn-top">
        MY ACCOUNT
      </button>
      <button id="my-stats" className="login-btn-top">
        MY STATS
      </button>
    </div>
  );
};
export default LoginModalNavbar;
