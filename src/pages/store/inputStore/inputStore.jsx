import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';


const CssTextField = withStyles({
    input: {
    color: pink[300],
    },
    root: {
        margin: '10px',
      '& label.Mui-focused': {
        color: pink[900],
      },
      '&::placeholder': {
        color: pink[50],
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: pink[50],
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: pink[50],
        },
        '&:hover fieldset': {
          borderColor: pink[900],
        },
        '&.Mui-focused fieldset': {
          borderColor: pink[100],
        },
      },
    },
  })(TextField);


const InputStore=({attribute,handleChange,param})=> {
    return (
        <div>
            <CssTextField
                InputLabelProps={{ shrink: true }}
                id={attribute.id}
                label={attribute.name}
                name={attribute.name}
                placeholder={attribute.placeholder}
                type={attribute.type}
                variant={"outlined"}
                onChange={(e => handleChange(e.target.id, e.target.value))}
                error={param}
/*                 helperText={param ? ' debe tener min 6 caracteres.' : ' '}
 */            />
        </div>
    )
}
export default  InputStore;