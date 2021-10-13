import React, {useState}  from 'react';
import Title from './components/title/Title';
import Label from './components/label/Label';
import Input from './components/input/input';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import { useMutation, gql } from '@apollo/client';
import { REGISTER_MUTATION } from '../../graphql/gqlRegister';
import { grey } from '@material-ui/core/colors';

import './register.css';
 
const Register = () => {
    const history=useHistory();
    const [user, setUser] = useState(''); 
    const [uName, setUname] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorConf, setPasswordErrorConf] = useState(false);

    const [mail, setMail] = useState('')
    const [confPass, setConfPass] = useState('');
    const [terms, setTerms] = useState(false);



    const login = () =>{
        history.push('/')
    }

    function handleChange(name,value){
        if(name === 'cedula'){
            setUser(value)
        }
        if(name=== 'contraseña'){
            if(value.length < 8){
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
            if(value == password){
                setPasswordErrorConf(false);
                setConfPass(value)
            }else{
                setPasswordErrorConf(true);
            }
        }

        if(name === 'email'){
            setMail(value)
        }


    }
    const checkOn = () => {
        setTerms(true);
        console.log(terms)

    };
    console.log(terms)

    const btnDisabled = user.length > 0 && uName.length > 0 && lastName.length > 0 && password.length > 0 && mail.length > 0  && confPass.length > 0 && terms === true ; // this three conditions should have filled for activate the button submmit. 


    const [handleSubmit] = useMutation(REGISTER_MUTATION, {
        variables: {
            uID: parseInt(user),
            uName:uName,
            uLastName:lastName,
            uPassword: password,
            uEmail: mail,
            uTerm: terms
        },
        onCompleted: ({ createUser }) => {
          localStorage.setItem('token', createUser.token);
          /* history.push('/'); */
        }
    });

/*     function ifMatch (param){
        if(param.user > 0 && param < 0){
            if(param.user === 'Santiago' && param.password==='123456'){
                const {user, password} = param;
                let ac = {user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account',account);
                setIsLogin(true);
            }
        }
    } */



    /* @@@@@@@ */
     

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
        disabled: {
            color: grey[50],
            background:grey[200]
        },


            
          
    })(Button);


    /* @@@@@@@ */

    return(
        
        <div className='re-container'>
            <div className='re-content'>
                <Title text='Registro de Nuevo usuario'/>
               <Input
                attribute={{
                    id:'cedula',
                    name:'cedula',
                    type:'tel',
                    placeholder:'Ingrese su cedula'
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
                    conf={passwordErrorConf}
                />
                <Input
                    attribute={{
                        id:'email',
                        name:'email',
                        type:'mail',
                        placeholder:'ingrese su correo electronico'
                    }}
                    handleChange={handleChange}
                />
                    <FormControlLabel 
                        control={
                                    <Checkbox         
                                        sx={{
                                            color: pink[800],
                                            '&.Mui-checked': {
                                                color: pink[600],
                                            },
                                        }}
                                        onChange={(e)=>checkOn()}
                                    />
                                } 
                        label="acepto terminos y condiciones"
                    />
                <div className='submit-button-container'>
                    <StyledButton onClick={handleSubmit} disabled={!btnDisabled}>
                        Sign Up
                    </StyledButton>
                </div>


                <div className='log-container'>
                ¿Ya tienes una cuenta?
                </div>
                <div className='login-button-container'>
                    <Button color="secondary" onClick={()=> login() }>Entrar</Button>
                </div>
                    
            </div>
        </div>
    )

};
export default Register;