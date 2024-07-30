import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNavColor, setShowNavColor] = useState(false);

  return (
    <>
       <MDBNavbar expand='lg' dark style={{ backgroundColor: '#000000', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/inicio'>Habitad Inteligente</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <Link to="/inicio">
                  <MDBNavbarLink aria-current='page' href='/inicio'style={{color:'azure'}}>
                    Regresar
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/RegistrosModic2">
                  <MDBNavbarLink href='#'style={{color:'azure'}}>Roedores</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/RegistrosModic3">
                  <MDBNavbarLink href='#'style={{color:'azure'}}>Bebedores</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
          <MDBNavbarItem style={{color:'azure'}}>
                <span>
                  ¿Qué desea Modificar?
                </span>
              </MDBNavbarItem>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
