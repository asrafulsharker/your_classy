import React from 'react';
import { Container } from 'react-bootstrap';
import Free_software from '../Free_software/free_software';
import Nav_bar from '../Nav/nav'
import './home.css'
function home() {
  return <div>
      <Nav_bar/>
      <Container>
      <form className='home_search'>
  <label>
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Search"></input>
</form>
      </Container>
   
      <Free_software/>
  </div>;
}

export default home;
