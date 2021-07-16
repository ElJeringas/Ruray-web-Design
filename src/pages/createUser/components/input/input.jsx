import React from 'react';
import './input.css';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';



const CssTextField = withStyles({
    input: {
    color: '#fff',
    },
    root: {
        /* marginTop: '1px', */
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

const Input = ({attribute,handleChange,param}) => {


    return (
        <div className='input-container'>
            <CssTextField 
                id={attribute.id}
                size="small"
                label={attribute.name}
                name={attribute.name}
                placeholder={attribute.placeholder}
                type={attribute.type}
                variant="outlined"
                onChange={(e)=> handleChange(e.target.name, e.target.value)}
                helperText={param ? ' debe tener min 6 caracteres.' : ' '}
                className=''
                error = {param}
                InputLabelProps={{style: { color: '#fff'}, 
              }}
              InputProps={{
                style: {
                    color: "white",
                }

            }}
             />
        </div>
    )
};
export default Input;