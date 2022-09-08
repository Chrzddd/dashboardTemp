import { useState} from "react";
import Axios from "axios";
import Graphics from "./Graphics";
import SideBar from "./SideBar";
import Table from "./Table";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {sendIcon, xIcon} from "./icons/Icons"
import Alert from '@mui/material/Alert';

export default function Layout(){
    const [show, setShow] = useState ('1')
    const [values, setValues] = useState(``);
    const [open, setOpen] = useState(false);
    
    const handleChangeValues = (value) =>{      
        setValues(prevValue=>({
          ...prevValue,
          [value.target.name]: value.target.value,     
        }));      
    }
    const handleSubmit = () =>{
        Axios.post("http://localhost:4001/register",{
        name: values.name,
        valor: values.valor,
        codigo: values.codigo
      }).then((result)=>{
        
      })
      
      setOpen(false)  
      
    }
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <div className="bg-white">
            <div className={`flex h-screen w-screen`}>             
                <SideBar  
                    change1={() => setShow('1')}
                    change2={() => setShow('2')}
                />
                <div>          
                    <Dialog open={open} >
                        <DialogTitle>Cadastrar Produto</DialogTitle>
                        <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="name"
                            label="Nome do Produto"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChangeValues}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="valor"
                            name="valor"
                            label="Valor do Produto"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChangeValues}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="codigo"
                            label="Codigo do Produto"
                            name="codigo"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChangeValues}
                        />
                        </DialogContent>
                        <DialogActions>
                            <Button  variant="outlined" startIcon={xIcon} color="error"onClick={handleClose}>Cancel</Button>
                            <Button  variant="outlined" endIcon={sendIcon} color="success"onClick={handleSubmit}>Cadastrar</Button>
                        </DialogActions>
                    </Dialog>
                </div>
                             {show === `1` ? 
                                <div className="a flex flex-col w-full h-full justify-center items-center">
                                    <div className={`flex flex-col sm:w-4/5 w-5/6 justify-center h-full`}>
                                        <Graphics></Graphics>
                                    </div>
                                </div>
                                :  
                                <div className="flex flex-col w-full h-full justify-center items-center">
                                    <div className={`flex flex-col  h-4/5 overflow-auto items-center w-full rounded-md `}>
                                        <Table></Table>
                                    </div>
                                    <button className=" mt-5 bg-gray-500 w-44 h-10 rounded-md text-white hover:text-black hover:shadow-xl" onClick={()=>setOpen(true)}>Cadastrar</button>
                                </div>                                
                            }
                            
                    </div>
                </div>
            )

}  
