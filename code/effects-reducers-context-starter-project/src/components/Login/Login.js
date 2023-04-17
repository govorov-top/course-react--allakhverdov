import React, {
  useState,
  useEffect,
  useReducer, useContext, useRef,
} from "react";

import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from "../../store/auth-context";

const emailReducer = (prevState, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.includes("@"),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const passwordReducer = (prevState, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.trim().length > 7,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 7,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const Login = () => {
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });

  const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, {
    value: "",
    isValid: undefined,
  });
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const emailChangeHandler = (event) => {
    dispatchEmailState({ type: "USER_INPUT", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordState({ type: "USER_INPUT", value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmailState({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPasswordState({ type: "INPUT_BLUR" });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (formIsValid){
      ctx.inLogin(emailState.value && passwordState.value)
    } else if (!emailIsValid){
      emailInputRef.current.focus();
    } else if (!passwordIsValid){
      passwordInputRef.current.focus();
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Effect function");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 1000);

    return () => {
      console.log("Очистка");
      clearTimeout(timer);
    };
  }, [emailIsValid, passwordIsValid]);

  return (
      <Card className={styles.login}>
        <form onSubmit={submitHandler}>
          <Input
              ref={emailInputRef}
              id="email"
              label="Email"
              type="email"
              isValid={emailIsValid}
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
          />
          <Input
              ref={passwordInputRef}
              id="password"
              label="Пароль"
              type="password"
              isValid={passwordIsValid}
              value={passwordState.value}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
          />
          <div className={styles.actions}>
            <Button type="submit">
              Вход
            </Button>
          </div>
        </form>
      </Card>
  );
};

export default Login;
