import React from 'react';
import './input.css';
import { TextField } from '@material-ui/core';
import { BorderColor } from '@material-ui/icons';



const Input = ({attribute,handleChange,param}) => {
    return (
        <div className='input-container'>
            <TextField  margin="none" variant="outlined" 

                id={attribute.id} /* identificar con que input estamos trabajando */
                label={attribute.name}
                name={attribute.name} /* trabajar con accesibilidad y trabajar con funciones dinamicas */
                placeholder={attribute.placeholder} /* texto de ayuda en caja */
                type={attribute.type}/* tipo de caracteres que se muestra */
                error = {param }
                style={{
                    backgroundColor: "#344955"
                }}
                InputProps={{
                    style: {
                        color: "white",
                        borderColor: "#344955 !important"

                    }

                }}
                InputLabelProps={{className:'TextLabel'}}
                helperText={param ? 'Contraseña debe tener min 6 caracteres.' : ' '}
                onChange={(e)=> handleChange(e.target.name, e.target.value)} /* manejador de estados a partr de un evento */
               /*  className={param ? 'input-error' : 'regular-style'} */
            />
        </div>
    )
};
export default Input;