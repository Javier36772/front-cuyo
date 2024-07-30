import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Axios from 'axios';
import { Typography } from '@mui/material';

function ProductRegistration() {
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDio, setDio] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate if all required fields are filled
    if (!productName || !productType || !productWeight || !productPrice || !productDio) {
      showValidationError();
    } else {
      showConfirmationDialog();
    }
  };

  const showValidationError = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill out all the fields!',
      footer: '<a id="secondAlertLink" href="#">Why do I have these issues?</a>',
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle confirmation action if needed
      }
    });
  };

  const showConfirmationDialog = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to change the product details!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, confirm!',
    }).then((result) => {
      if (result.isConfirmed) {
        performProductRegistration();
      }
    });
  };

  const performProductRegistration = () => {
    Swal.fire('Saved!', 'Product details have been registered.', 'success');

    // Perform the actual product registration using Axios or your preferred method
    registerProduct();

    // Clear the input fields after successful registration
    clearInputFields();
  };

  const registerProduct = () => {
    // Replace the following Axios post request with your actual backend endpoint and payload
    Axios.put(`http://localhost:3003/Pedidos/${productName}`, {
      ID_Pedidos: productName,
      Fecha: String (productType),
      Precio: parseInt(productWeight),
      ID_Producto:parseInt (productPrice),
      Cantidad: parseInt(productDio),
    })
      .then(() => {
        // Handle success if needed
      })
      .catch((error) => {
        console.error(error);
        // Handle error if needed
      });
  };

  const clearInputFields = () => {
    setProductName('');
    setProductType('');
    setProductWeight('');
    setProductPrice('');
    setDio('');
  };

  return (
    <div className='container-product'>
      <Typography variant='h4' sx={{ textAlign: 'center', mt: '1em' }}>
        Ingrese los datos
      </Typography>

      <div className='form-panel'>
        <form onSubmit={handleFormSubmit}>
          <div className='form-group'>
            <label htmlFor='productName'>ID del Bebedero</label>
            <input
              type='text'
              id='productName'
              value={productName}
              onChange={(event) => {
                setProductName(event.target.value);
              }}
              className='form-control'
            />
          </div>
          <br />
          <div className='form-group'>
            <label htmlFor='productType'>Capacidad</label>
            <input
              type='text'
              id='productType'
              value={productType}
              onChange={(event) => {
                setProductType(event.target.value);
              }}
              className='form-control'
            />
          </div>
          <br />
          <div className='form-group'>
            <label htmlFor='productWeight'>Estado</label>
            <input
              type='text'
              id='productWeight'
              value={productWeight}
              onChange={(event) => {
                setProductWeight(event.target.value);
              }}
              className='form-control'
            />
          </div>
          <button className='btn btn-primary'>Modificar </button>
        </form>
      </div>
    </div>
  );
}

export default ProductRegistration;
