import React from 'react';
import './free_software.css';
import Nav from '../Nav/nav';
import { Container,Col, Row } from 'react-bootstrap';
function single_tab() {
  return <div>
      <Nav/>
      <Container>
          <div className='main_part_single'>
          <h1>
              Git Professional
          </h1>
          
          <img src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'/>
          <button>Download Now</button>
          <p className='details_single'>
          This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of the CC licenses offered. Recommended for maximum dissemination and use of licensed materials.This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of the CC licenses offered. Recommended for maximum dissemination and use of licensed materials.This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of the CC licenses offered. Recommended for maximum dissemination and use of licensed materials.
          </p>
          
          </div>
      </Container>

  </div>;
}

export default single_tab;
