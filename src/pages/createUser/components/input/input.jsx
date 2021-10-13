import React from 'react';
import './input.css';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';



const CssTextField = withStyles({
  input: {
  color: '#fff',
  },
  root: {
      marginTop: 17,
    '& label.Mui-focused': {
      color: '#f9aa33',
    },
    
    '&::placeholder': {
      color: '#fff',
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: '#f9aa33',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#A9A9A9', 
      },
      '&:hover fieldset': {
        borderColor: '#f9aa33',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f9aa33',
      },
    },
  },
})(TextField);


const Input = ({attribute,handleChange,param, conf}) => {


    return (
        <div >
            <CssTextField 
                id={attribute.id}
                size="small"
                label={attribute.name}
                name={attribute.name}
                placeholder={attribute.placeholder}
                type={attribute.type}
                variant="outlined"
                onChange={(e)=> handleChange(e.target.id, e.target.value)}
                helperText={param ? ' debe tener min 8 caracteres.': ' ' ? conf ? 'deben ser iguales' : '' : ''}
                error = {param , conf}
             />
        </div>
    )
};
export default Input;