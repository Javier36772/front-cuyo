import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Axios from "axios";
import { Typography } from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';
import '../sources/estilos.css';

function ProductRegistration() {
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [productWeight, setProductWeight] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!productName || !productType || !productWeight) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all the fields!',
      });
    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to change the product details!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, confirm!'
      }).then((result) => {
        if (result.isConfirmed) {
          registerProduct();
        }
      });
    }
  };

  const registerProduct = () => {
    Axios.post("http://54.172.12.139/bebe", {
      id_bebedero: productName,
      capacidad: productType,
      estado: productWeight,
    })
    .then((response) => {
      Swal.fire('Saved!', 'Product details have been registered.', 'success');
      setProductName('');
      setProductType('');
      setProductWeight('');
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to register product. Please try again.',
      });
    });
  };

  return (
    <div className='container-product'>
      <Typography variant='h4' sx={{ textAlign: 'center', mt: '1em' }}>
        Ingrese los datos del bebedero
      </Typography>
      <div className="form-panel">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="productName">ID del Bebedero</label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(event) => { setProductName(event.target.value); }}
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="productType">Capacidad</label>
            <input
              type="text"
              id="productType"
              value={productType}
              onChange={(event) => { setProductType(event.target.value); }}
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="productWeight">Estado</label>
            <input
              type="text"
              id="productWeight"
              value={productWeight}
              onChange={(event) => { setProductWeight(event.target.value); }}
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Registrar el bebedero</button>
        </form>
      </div>
    </div>
  );
}

export default ProductRegistration;

