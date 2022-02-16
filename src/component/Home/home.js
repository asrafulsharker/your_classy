import React from 'react';
import { Container } from 'react-bootstrap';
import Free_software from '../Free_software/free_software';
import Nav_bar from '../Nav/nav'
import './home.css'
function home() {
  return <div>
      <Nav_bar/>
      <Container>
      </Container>
      <Free_software/>
  </div>;
}

export default home;
