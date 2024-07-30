import React, { useState } from "react";
import "../sources/estilos2.css";
import Swal from "sweetalert2";
import Axios from "axios";
import { Grid, Typography, Card, CardContent, Button, Box } from "@mui/material";

function ProductRegistration() {
  const [idInventario, setInventario] = useState("");
  const [idBebedero, setBebedero] = useState("");

  const handleEliminarClick2 = () => {
    if (!idInventario) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter the ID to delete!",
      });
      return;
    }

    Axios.delete(`http://54.172.12.139/animal/${idInventario}`)
      .then(() => {
        Swal.fire("Deleted!", "The record has been deleted.", "success");
        setInventario("");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Error", "There was a problem deleting the record.", "error");
      });
  };

  const handleEliminarClick4 = () => {
    if (!idBebedero) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter the ID to delete!",
      });
      return;
    }

    Axios.delete(`http://54.172.12.139/bebe/bebedero/${idBebedero}`)
      .then(() => {
        Swal.fire("Deleted!", "The record has been deleted.", "success");
        setBebedero("");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Error", "There was a problem deleting the record.", "error");
      });
  };

  return (
    <>
      <Grid>
        <Typography variant="h4" sx={{ textAlign: "center", mt: "1em" }}>
          Ingrese el ID que desea eliminar
        </Typography>
      </Grid>
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
                flexDirection: "column",
              }}
            >
              <Box sx={{ mb: "15px" }}>
                <Typography variant="p">
                  Ingrese ID del Roedor a eliminar
                </Typography>
              </Box>

              <input
                type="text"
                id="inventarioId"
                value={idInventario}
                onChange={(event) => {
                  setInventario(event.target.value);
                }}
                className="form-control"
              />
              <Button
                onClick={handleEliminarClick2}
                variant="outlined"
                color="error"
                sx={{ mt: "20px" }}
              >
                Eliminar
              </Button>
            </CardContent>
          </Card>
        </Grid>
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
                flexDirection: "column",
              }}
            >
              <Box sx={{ mb: "15px" }}>
                <Typography variant="p">ID del Bebedero a eliminar</Typography>
              </Box>

              <input
                type="text"
                id="bebederoId"
                value={idBebedero}
                onChange={(event) => {
                  setBebedero(event.target.value);
                }}
                className="form-control"
              />
              <Button
                onClick={handleEliminarClick4}
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
    </>
  );
}

export default ProductRegistration;
