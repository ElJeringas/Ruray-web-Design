import React, {useState}  from 'react';
import Title from './components/title/Title';
import Label from './components/label/Label';
import Input from './components/input/input';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import background from 'c:/Users/Santiago/Desktop/Ruray/login-ruray-web/src/assets/images/background.png'

import cons from 'c:/Users/Santiago/Desktop/Ruray/login-ruray-web/src/assets/images/cons.jfif';

import './register.css';
 
const Register = () => {
    const history=useHistory();
    const [user, setUser] = useState(''); 
    const [uName, setUname] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [confPass, setConfPass] = useState('');
    const [isLogin, setIsLogin] = useState(false);


    const login = () =>{
        history.push('/')
    }

    function handleChange(name,value){
        if(name === 'usuario'){
            setUser(value)
        }else{
            if(value.length < 6){
                setPasswordError(true);

            }else{
                setPasswordError(false);
                setPassword(value)
            }
        }
        if(name === 'nombre'){
            setUname (value)
        }

        if (name === 'apellido'){
            setLastName(value)
        }

        if (name === 'confPass'){
            setConfPass(value)
        }

        console.log('usuario: ',user)
        console.log('nombre ',uName)
        console.log('apellido: ',lastName)
        console.log('contraseña: ',password)
        /* console.log('conf: ',confPass) */

    }
    function ifMatch (param){
        if(param.user > 0 && param < 0){
            if(param.user === 'Santiago' && param.password==='123456'){
                const {user, password} = param;
                let ac = {user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account',account);
                setIsLogin(true);
            }
        }
    }

    function handleSubmit(){
        let account = {user,password}
        if(account){
            ifMatch(account);
        }
    }


    /* @@@@@@@ */
     

    const StyledButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, #f9aa33 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          width:'100px',
          alignItems:'center',
          /* margin:'10px', */
          marginTop: '10px',
          padding: '0 20px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
        label: {
          textTransform: 'capitalize',
        },
    })(Button);


    /* @@@@@@@ */

    return(
        
        <div className='re-container'>
            <div className='re-content'>
                <Title text='Registro de Nuevo usuario'/>
               <Input
                attribute={{
                    id:'usuario',
                    name:'usuario',
                    type:'text',
                    placeholder:'Ingrese su usuario'
                    }}

                    handleChange={handleChange}
                />

                <Input
                    attribute={{
                        id:'nombre',
                        name:'nombre',
                        type:'text',
                        placeholder:'Ingrese su nombre'
                    }}
                
                    handleChange={handleChange}
                />
               <Input
                    attribute={{
                        id:'apellido',
                        name:'apellido',
                        type:'text',
                        placeholder:'Ingrese su apellido'
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

              <Input
                    attribute={{
                        id:'confPass',
                        name:'confirmar contraseña',
                        type:'password',
                        placeholder:'Confirmar contraseña'
                    }}
                    handleChange={handleChange}
                />

                <StyledButton onClick={handleSubmit}>
                    Sign Up
                </StyledButton>

                <div className='register-container'>
                ¿Ya tienes una cuenta?
                <Button color="secondary" onClick={()=> login() }>Entrar</Button>
                </div>
                    
            </div>
        </div>
    )

};
export default Register;