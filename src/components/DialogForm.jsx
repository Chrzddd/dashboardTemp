import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {


    const handleClickOpen = () => {
    props.setOpen(true);
    };
  
    const handleClose = () => {
    props.setOpen(false);
    };
  

  return (
    <div>
      
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
        
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do Produto"
            defaultValue={props.name}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="valor"
            label="Valor do Produto"
            defaultValue={props.valor}
            type="tel"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="codigo"
            label="Codigo do Produto"
            defaultValue={props.codigo}
            type="tel"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Excluir</Button>
          <Button onClick={handleClose}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}