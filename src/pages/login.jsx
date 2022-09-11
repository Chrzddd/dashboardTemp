import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import {userIcon} from '../components/icons/Icons'
import { useState } from 'react';
import Axios from 'axios'

export default function Login(){
    const [loginValue, setLoginValue] = useState(``)
    const [invalido, setInvalido] = useState('1')
    const inputsChanges = (value) =>{      
        setLoginValue(prevValue=>({
          ...prevValue,
          [value.target.name]: value.target.value,     
        }));      
    }
    const loginStart = () =>{
        Axios.post("http://localhost:4001/login", {
            email:loginValue.email,
            password:loginValue.password
        }).then((result)=>{
            if (result.data === true){
                console.log(`sucesso ao logar`)
            }else if (result.data === false){
                return setInvalido('2')
            }
        })
    }

    return (
        <div className={`flex flex-col w-screen h-screen justify-center items-center bg-gray-500 text-black `}>
            <div className={`flex flex-col w-1/6 h-4/6 sm:h-3/6 justify-center items-center bg-gray-50 rounded-md shadow-md shadow-gray-400 min-w-max`}>
                <div className={`flex h-full justify-center items-center font-sans`}>
                    {userIcon}
                </div>
                <span>Realize seu login</span>
                {invalido === `2` ? <div className='flex flex-col mt-5 bg-red-300 w-5/6 items-center justify-center rounded-md h-1/4 font-sans'>Usuário ou senha invalidos.</div>:false}
                <div className={`flex flex-col p-5 h-full justify-center`}>
                    <FormControl color="primary" margin="normal">
                        <InputLabel htmlFor="email">Login </InputLabel>
                        <Input 
                            id="email" 
                            name="email" 
                            aria-describedby="my-helper-text"
                            onChange={inputsChanges}
                        />
                    </FormControl>
                    <FormControl sx={{marginTop:2}}>
                        <InputLabel color='primary' htmlFor="password">Senha </InputLabel>
                        <Input 
                            sx={{ borderRadius:1}}
                            color='primary' 
                            name='password' 
                            id="password" 
                            aria-describedby="my-helper-text" 
                            type="password"
                            onChange={inputsChanges} 
                        />        
                    </FormControl>
                    <Button onClick={loginStart}sx={{marginTop:4}}variant="outlined" color="primary">
                        Entrar
                    </Button>
                </div>
            
            </div>
        </div>
    )
}