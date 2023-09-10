import {
  LoginModalNavbar,
  LeftHeader,
  RightHeader,
  NickNameInput,
  EmailInput,
  PasswordInput,
  LoginBtn,
  ModalAvatar,
} from '../components/index.js';
const LoginModal = () => {
  return (
    <main className="lobby">
      <div className="modal">
        <LoginModalNavbar />
        <div className="flex-end-bottom modal-header">
          <LeftHeader />
          <RightHeader />
        </div>
        <div className="flex-align-center modal-showcase">
          <form className="modal-form" id="modal-form">
            <div className="form-contents">
              <NickNameInput />
              <EmailInput />
              <PasswordInput />
            </div>
            <LoginBtn />
          </form>
          <div className="modal-avatar">
            <label>AVATAR</label>
            <ModalAvatar />
          </div>
        </div>
      </div>
    </main>
  );
};
export default LoginModal;
