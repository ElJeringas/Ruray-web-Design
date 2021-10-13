import React, { useState } from 'react';
import './Login.css'
import Title from './components/title/title';
import Input from './components/input/input';
import ruray from 'c:/Users/Santiago/Desktop/Ruray/login-ruray-web/src/assets/images/ruray.png';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import { LOGIN_MUTATION } from '../../graphql/uLogin';

const Login = (props) => {
    const history=useHistory();
    const [user, setUser] = useState();
    const [password, setPassword]=useState('');
    const [passwordError, setPasswordError]=useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError, sethasError] = useState(false);


    const registro = () =>{
        history.push('/register')
    }


    function handleChange(name, value){
        if(name === 'usuario'){
            setUser(value)
            sethasError(false);
        }else{
            if(value.length<6){  /*  minimo 6 caracteres */
                setPasswordError(true);
                sethasError(false);
            }else{
                setPasswordError(false);
                setPassword(value)
                sethasError(false);
            }
        }
    }
/*     function ifMatch(param){
        console.log(param)
        if(param.user.length > 0 && param.password.length > 0){
            if(param.user === 'Santiago' && param.password==='123456'){
                const{user,password} = param;
                let ac = {user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            }else{
                setIsLogin(false);
                sethasError(true);

            }
        }else{
            setIsLogin(false);
            sethasError(true);
        }
    } */
/*     function handleSubmit (){
        let account = {user,password}
        if (account){
           ifMatch (account)
        }
    } */

    const [handleSubmit] = useMutation(LOGIN_MUTATION, {
        variables: {
            uID: parseInt(user),
            uPassword: password
        },
        onCompleted: ({ login }) => {
          localStorage.setItem('token', login.token);
          /* history.push('/'); */
        }
      });

    const StyledButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, #f9aa33 30%, #FF8E53 90%)',
          borderRadius: 3,
          float:'left',
          border: 0,
          color: 'white',
          height: 48,
          width:'100px',
          /*alignItems:'center',*/   
          /* margin:'10px', */
          marginTop: '10px',
          padding: '0 20px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
        label: {
          textTransform: 'capitalize',
        },
    })(Button);

    return(
        <div>
    
        <div className='login-container'>

    {   isLogin ? 
    <div className='home-container'>
        <h1>Hola  {user}!</h1>
        <label>Login correcto.</label>
        
    </div>
    :
    <div className='login-content'>
        <div >
            <img src={ruray} alt="logo" width="120" height="110"></img>
        </div>
        <Title text='¡Bienvenido!'/>
            { hasError &&
                <label className='label-alert'>
                        Su contraseña o usuario son incorrectos,
                        o no existen en nuestra plataforma
                </label>
            }

        <Input 
            attribute={{
                id:'usuario',
                label:'usuario',
                name:'usuario',
                type: 'tel',
                placeholder: 'Ingrese su usuario'
            }}

            handleChange={handleChange}
    
        />
        <Input  
            attribute={{
                id:'contraseña',
                label:'Nombre de usuario',
                name:'contraseña',
                type: 'password',
                placeholder: 'Ingrese su contraseña'
            }}

            handleChange={handleChange}
            param={passwordError}
        />
        {passwordError && 
            <label className='label-error'>
                * Constraseña inválida o incorrecta
            </label>
        }
        <div className='submit-button-container'>
            <StyledButton onClick={handleSubmit}>
                Sign In
            </StyledButton>
        </div>

        <div className='register-container'>
            ¿No tienes una cuenta?
        </div>
        <div className='register-button-container'>
            <Button color="secondary" onClick={()=> registro() }>Regístrate</Button>
        </div>
    </div>
    } 
</div>
        </div>
    )
};

export default Login;
