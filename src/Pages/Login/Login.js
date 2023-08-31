import React, {useState} from "react";
import Title from "./Componentes/Title/Title";
import Label from "./Componentes/Label/Label";
import Input from "./Componentes/Input/Input";
import './Login.css';
const Login = ()=> {
    const [user,setUser] =useState('');
    function handleChange(name,value){
        if(name=== 'usuario'){
            setUser(value)
            //variable para almacenar
        }
    }
    console.log('usuario', user)
    return (
        <div className='login-container'>
          <Title text='Soy un titulo'/>
          <Label text ='Usuario'/>
          <Input
          attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder: 'Ingrese su usuario'
          }}
          handleChange={handleChange}
          />
          <Label text ='Contraseña'/>
         <Input></Input>
             </div>
    )
};
export default Login;
