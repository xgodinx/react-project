import MainButton from "../../../UI/MainButton/MainButton";
import { useState } from "react";
import "./Registration.scss";
export default function Registration() {
  const [errorLogin, setErrorLogin] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [hasErrorLogin, setIsHasErrorLogin] = useState(true);
  const [hasErrorEmail, setIsHasErrorEmail] = useState(true);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  function validateLogin(event: any) {
    const loginInput = event.target.value;
    setLogin(loginInput);
    if (loginInput.trim().length < 5) {
      setErrorLogin("minimum 5 chars");
      setIsHasErrorLogin(true);
    } else {
      setErrorLogin("");
      setIsHasErrorLogin(false);
    }
  }

  function validateEmail(event: any) {
    const emailInput = event.target.value;
    setEmail(emailInput);
    if (!emailInput.trim().includes("@")) {
      setErrorEmail("incorrect email");
      setIsHasErrorEmail(true);
    } else {
      setErrorEmail("");
      setIsHasErrorEmail(false);
    }
  }

  function submitForm(event: any) {
    event.preventDefault();
    if (hasErrorLogin || hasErrorEmail) return;
    console.log("form submitted");
  }
  return (
    <form className="reg__form" action="#" onSubmit={submitForm}>
      <p className="reg__title">Login</p>
      <input
        className="reg__login-input"
        type="text"
        value={login}
        onChange={validateLogin}
      />
      {errorLogin ? <p className="reg__error">{errorLogin}</p> : null}
      <p className="reg__title">Email</p>
      <input
        className="reg__email-input"
        type="email"
        value={email}
        onChange={validateEmail}
      />
      {errorEmail ? <p className="reg__error">{errorEmail}</p> : null}
      <div className="checkbox__row">
        <input
          className="reg__checkbox"
          type="checkbox"
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span>I agree to the Terms & Privacy Policy</span>
      </div>
      <MainButton
        type="submit"
        disabled={hasErrorLogin || hasErrorEmail || !checked}
      >
        Registrate
      </MainButton>
    </form>
  );
}
