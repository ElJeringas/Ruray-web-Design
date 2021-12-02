import React, { useState } from "react";
import "./Login.css";
import Title from "./components/title/title";
import Input from "./components/input/input";
import ruray from "../../assets/images/ruray.png";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useMutation,} from "@apollo/client";
import { LOGIN_MUTATION } from "../../graphql/uLogin";

const Login = (props) => {
    const history = useHistory();
    const [user, setUser] = useState();
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError, sethasError] = useState(false);

    const register = () => {
    history.push("/register");};
  //use toi prob api is correct

function handleChange(name, value) {
    if (name === "usuario") {
      setUser(value);
      sethasError(false);
    } else {
      if (value.length < 6) {
        /*  minimo 6 caracteres */
        setPasswordError(true);
        sethasError(false);
      } else {
        setPasswordError(false);
        setPassword(value);
        sethasError(false);
      }
    }
  }
  const [handleSubmit] = useMutation(LOGIN_MUTATION, {
    variables: {
      uID: parseInt(user),
      uPassword: password,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem("token", login.token);
      /* history.push('/'); */
    },
  });
  //pass to other file with styles  or functions
  const StyledButton = withStyles({
    root: {
      background: "linear-gradient(45deg, #f9aa33 30%, #FF8E53 90%)",
      borderRadius: 3,
      float: "left",
      border: 0,
      color: "white",
      height: 48,
      width: "100px",
      /*alignItems:'center',*/
      /* margin:'10px', */
      marginTop: "10px",
      padding: "0 20px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
    label: {
      textTransform: "capitalize",
    },
  })(Button);

  return (
    <div>
      <div className="login-container">
        {isLogin ? (
          <div className="home-container">
            <h1>Hola {user}!</h1>
            <label>Login correcto.</label>
          </div>
        ) : (
          <div className="login-content">
            <div>
              <img src={ruray} alt="logo" width="220" height="200"></img>
            </div>
            <Title text="¡Bienvenido!" />
            {hasError && (
              <label className="label-alert">
                Su contraseña o usuario son incorrectos, o no existen en nuestra
                plataforma
              </label>
            )}
            <Input
              attribute={{
                id: "usuario",
                label: "usuario",
                name: "usuario",
                type: "tel",
                placeholder: "Ingrese su usuario",
              }}
              handleChange={handleChange}
            />
            <Input
              attribute={{
                id: "contraseña",
                label: "Nombre de usuario",
                name: "contraseña",
                type: "password",
                placeholder: "Ingrese su contraseña",
              }}
              handleChange={handleChange}
              param={passwordError}
            />
            {passwordError && (
              <label className="label-error">
                * Constraseña inválida o incorrecta
              </label>
            )}
            <div className="submit-button-container">
              <StyledButton onClick={handleSubmit}>Sign In</StyledButton>
            </div>

            <div className="register-container">¿No tienes una cuenta?</div>
            <div className="register-button-container">
              <Button color="secondary" onClick={() => register()}>
                Regístrate
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default Login;


