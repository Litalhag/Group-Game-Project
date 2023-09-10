import ErrorDiv from './ErrorDiv';
import './PasswordInput.css';
const PasswordInput = () => {
  return (
    <div className="input-type-div">
      <label>PASSWORD</label>
      <div className="input-container">
        <span className="input-icon">
          <img src="./assets/images/icons/Vector-eye.png" alt="" />
        </span>
        <input type="password" className="custom-input" placeholder="AHHkhsldlfo888" id="passwordInput" />
      </div>
      <ErrorDiv id="passwordInputError" />
      <ul className="horizontal-list">
        <li id="password-list-spc-chr">Special Characters</li>
        <li id="password-list-caps">Caps</li>
        <li id="password-list-lowercase">Lowercase</li>
        <li id="password-list-numbers">Numbers</li>
      </ul>
    </div>
  );
};
export default PasswordInput;
