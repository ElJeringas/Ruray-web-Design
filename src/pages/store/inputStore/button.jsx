import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import { pink } from '@material-ui/core/colors';


const StyledButton = withStyles({
    root: {
      background: pink[900],
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      width:'100px',
      alignItems:'center',
      marginTop: '10px',
      padding: '0 20px',
      boxShadow: '0 3px 5px 2px ',
      '&:hover': {
        transition: "0.4s",
        background: pink[700],
      },
    },
    label: {
      textTransform: 'capitalize',
    },
})(Button);


const ClassButton=({text,onClick})=> {
    return (
        <StyledButton
            variant={"contained"}
            onClick={onClick()}
        >{text}
        </StyledButton>

    )
}
export default  ClassButton;