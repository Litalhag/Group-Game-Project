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
const LobbyModal = () => {
  return (
    <main className="lobby">
      <div className="modal">
        <LoginModalNavbar />
        <div className="flex-end-bottom modal-header">
          <LeftHeader />
          <RightHeader />
        </div>
        <div className="flex-align-center modal-showcase">111111</div>
      </div>
    </main>
  );
};
export default LobbyModal;
