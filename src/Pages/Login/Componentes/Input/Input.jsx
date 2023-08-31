import React from "react";
import './Input.css'

const Input=({attribute, handleChange, param})=>{ /* Le damos propiedades al input para que sea dinamico*/
    return (
        <div>
          <input
          id= {attribute.id} /* identifica que tipo de input trabajamos*/
          name= {attribute.name}
          placeholder= {attribute.placeholder} /* Aparece en el input sombreado*/
          type={attribute.type}  /* tipo de dato a ingresar en el input */
          onChange={(e) => handleChange(e.target.name,e.target.value)} /* Maneja estados, realizamos una función a partir de un evento */
          className='regular-style' /* Estilo del input*/
          />
        </div>
    )
};
export default Input;