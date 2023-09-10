import ErrorDiv from './ErrorDiv';

const EmailInput = () => {
  return (
    <div className="input-type-div">
      <label>EMAIL ADDRESS</label>
      <input type="email" id="emailInput" placeholder="Enter valid email address" />
      <ErrorDiv id="emailInputError" />
    </div>
  );
};
export default EmailInput;
