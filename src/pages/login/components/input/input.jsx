import React from 'react';
import './input.css';

const Input = ({attribute,handleChange,param}) => {
    return (
        <div className='input-container'>
            <input
                id={attribute.id} /* identificar con que input estamos trabajando */
                name={attribute.name} /* trabajar con accesibilidad y trabajar con funciones dinamicas */
                placeholder={attribute.placeholder} /* texto de ayuda en caja */
                type={attribute.type}/* tipo de caracteres que se muestra */
                onChange={(e)=> handleChange(e.target.name, e.target.value)} /* manejador de estados a partr de un evento */
                className={param ? 'input-error' : 'regular-style'}
            />
        </div>
    )
};
export default Input;