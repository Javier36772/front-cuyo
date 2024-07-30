import * as React from 'react';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Axios from 'axios';
import "../sources/CardR.css";
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

function CardR() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [repetirContrasena, setRepetirContrasena] = useState('');
  const [errorContrasenas, setErrorContrasenas] = useState(false);
  const [errorRequisitos, setErrorRequisitos] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (contrasena !== repetirContrasena) {
      // Las contraseñas no coinciden
      setErrorContrasenas(true);
      setErrorRequisitos(false);
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/;

    if (!passwordRegex.test(contrasena)) {
      // La contraseña no cumple los requisitoszzz
      setErrorContrasenas(false);
      setErrorRequisitos(true);
      return;
    }

    Axios.post("http://localhost:3002/registro", {
      correo: correo,
      nombre: nombre,
      contrasena: contrasena
    })
      .then((response) => {
        if (response.data) {
          navigate("/IniciarSesion", { replace: true });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="tarjeta">
      <Typography variant='h4' sx={{textAlign:'center',mt:'1em'}}>
      Registro
      </Typography>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="nombre">Usuario:</label>
        <input
          className="input"
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label className="label" htmlFor="correo">Correo Electrónico:</label>
        <input
          className="input"
          type="email"
          id="correo"
          name="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />

        <label className="label" htmlFor="contrasena">Contraseña:</label>
        <input
          className="input"
          type="password"
          id="contrasena"
          name="contrasena"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />

        <label className="label" htmlFor="repetirContrasena">Repita la contraseña:</label>
        <input
          className="input"
          type="password"
          id="repetirContrasena"
          name="repetirContrasena"
          value={repetirContrasena}
          onChange={(e) => setRepetirContrasena(e.target.value)}
          required
        />

        {errorContrasenas && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">Las contraseñas no coinciden</Alert>
          </Stack>
        )}
        {errorRequisitos && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">Las contraseñas deben tener al menos una letra mayúscula, un número y un símbolo</Alert>
          </Stack>
        )}

        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default CardR;
