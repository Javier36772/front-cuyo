import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import '../sources/estilos.css';
import Swal from 'sweetalert2';
import Axios from "axios";
import { Typography } from '@mui/material';

function ProductRegistration() {
  const [rodentID, setRodentID] = useState('');
  const [rodentName, setRodentName] = useState('');
  const [rodentAge, setRodentAge] = useState('');
  const [rodentSex, setRodentSex] = useState('');
  const [rodentEntryDate, setRodentEntryDate] = useState('');
  const [rodentBreed, setRodentBreed] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!rodentID || !rodentName || !rodentAge || !rodentSex || !rodentEntryDate || !rodentBreed) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all the fields!',
        footer: '<a id="secondAlertLink" href="#">Why do I have these issues?</a>'
      });
    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to change the rodent details!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, confirm!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Saved!',
            'Rodent details have been registered.',
            'success'
          );

          registerRodent();

          setRodentID('');
          setRodentName('');
          setRodentAge('');
          setRodentSex('');
          setRodentEntryDate('');
          setRodentBreed('');
        }
      });
    }
  };

  const registerRodent = () => {
    Axios.post("http://54.172.12.139/animal", {
      id_Roedor: rodentID,
      Nombre: rodentName,
      edad: rodentAge,
      sexo: rodentSex,
      ingreso: rodentEntryDate || null,
      raza: rodentBreed,
    })
    .then(() => {
      // Handle success if needed
    })
    .catch((error) => {
      console.error(error.response); // Check the error response for more details
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to register rodent. Please try again.',
      });
    });
  };

  return (
    <div className='container-product'>
      <Typography variant='h4' sx={{ textAlign: 'center', mt: '1em' }}>
        Ingrese los datos del Roedor
      </Typography>
      <div className="form-panel">
        <form onSubmit={handleFormSubmit} className="form-container">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="rodentID">ID del Roedor</label>
              <input
                type="text"
                id="rodentID"
                value={rodentID}
                onChange={(event) => { setRodentID(event.target.value); }}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="rodentName">Nombre</label>
              <input
                type="text"
                id="rodentName"
                value={rodentName}
                onChange={(event) => { setRodentName(event.target.value); }}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="rodentAge">Edad</label>
              <input
                type="number"
                id="rodentAge"
                value={rodentAge}
                onChange={(event) => { setRodentAge(event.target.value); }}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="rodentSex">Sexo</label>
              <input
                type="text"
                id="rodentSex"
                value={rodentSex}
                onChange={(event) => { setRodentSex(event.target.value); }}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="rodentEntryDate">Ingreso</label>
              <input
                type="date"
                id="rodentEntryDate"
                value={rodentEntryDate}
                onChange={(event) => { setRodentEntryDate(event.target.value); }}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="rodentBreed">Raza</label>
              <input
                type="text"
                id="rodentBreed"
                value={rodentBreed}
                onChange={(event) => { setRodentBreed(event.target.value); }}
                className="form-control"
              />
            </div>
          </div>
          <button className="btn btn-primary">Registrar Roedor</button>
        </form>
      </div>
    </div>
  );
}

export default ProductRegistration;
