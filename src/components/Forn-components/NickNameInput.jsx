import ErrorDiv from './ErrorDiv';

const NickNameInput = () => {
  return (
    <div className="input-type-div">
      <label>NICKNAME</label>
      <input type="text" id="nicknameInput" placeholder="This will be your screen name" />
      <ErrorDiv id="nicknameInputError" />
    </div>
  );
};
export default NickNameInput;
