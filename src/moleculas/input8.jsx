import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../sources/estilos2.css";
import Swal from "sweetalert2";
import Axios from "axios";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";


function ProductRegistration() {
  const [idEmpleadoD, setIdEmpleadoD] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleEliminarClick = () => {
    console.log("llegue aquí");
    console.log(idEmpleadoD);

    Axios.delete(`http://localhost:3003/Empleado/Eliminar/${idEmpleadoD}`)
      .then(() => {
        // Add any additional logic or state updates here if needed
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='container-product'>
      <Typography variant='h4' sx={{ textAlign: 'center', mt: '1em' }}>
        Ingrese el ID del empleado a eliminar
      </Typography>

    <Grid 
      container
        spacing={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          mt: "2em",
        }}
    >
    <Grid item={4}>
          <Card
            sx={{
              transition: "1s all ease",
              "&:hover": {
                boxShadow: "rgba(0,0,0,0.25) 0px 14px 28px ",
                border: "1px solid #adb5bd",
                borderRadius: "15px",
              },
            }}
          >
            <CardContent
              sx={{
                display: "box",
                justifyContent: "center",
                flexDirection: "colum",
              }}
            >
              <Box sx={{ mb: "15px" }}>
                <Typography variant="p">
                  Ingrese id del inventario a Eliminar
                </Typography>
              </Box>

              <input
      type="text"
              id="idEmpleado"
              value={idEmpleadoD}
              onChange={(event) => { setIdEmpleadoD(event.target.value); }}
              className="form-control"
              />
              <Button
             onClick={handleEliminarClick}
                variant="outlined"
                color="error"
                sx={{ mt: "20px" }}
              >
                Eliminar
              </Button>
            </CardContent>
          </Card>
        </Grid>
    </Grid>
    </div>
  );
}

export default ProductRegistration;
