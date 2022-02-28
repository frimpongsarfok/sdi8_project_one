import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function ViewImage(props) {
    //set Properties and get item style details;
  const [open, setOpen] = React.useState(false);
  const [itemDetail,setItemDetail]=React.useState({});
  const handleClickOpen = () => {
  
     setOpen(true);
    
   
  };
const handleClose = () => {
      
    setOpen(false);
  };
  console.log(props)

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
       View Details
      </Button>
      <Dialog fullWidth={true} open={true} onClose={handleClose}>
        
        <DialogContent>
          <DialogContentText></DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content"
            }}
          >
            <CardMedia
              component="img"
              height="500"
              image= {props.src}
             
            />

          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
