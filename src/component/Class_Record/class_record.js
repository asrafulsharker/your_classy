import React, { useState } from 'react';
import Data from './record_data';
import Nav from '../Nav/nav';
import '../Free_software/free_software.css';
import { Container,Col, Row } from 'react-bootstrap';
// import Single_tab from './single_tab';
const Free_software =() =>{


  const [filter, setFilter] = useState('');


  const [noOfElement, setnoOfElement] = useState(4);
  const loadmore = () =>{
    setnoOfElement(noOfElement + noOfElement);
  }
  let slice = Data.records.slice(0, noOfElement);



  const searchText = (event) =>{
    setFilter(event.target.value);
  }

  let dataSearch = Data.records.filter(item =>{
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
  })
  return (
    <div>
<Nav/>
    <Container className='free_soft_container'>
        <div className='main_component'>
        <div className='main_mid'>
        <form className='home_search'>
          <label>
            <input type="text" 
            name="name" 
            className='' 
            value={filter} 
            onChange={searchText.bind(this)}
            />
          </label>
          <button type="" value="Search" className=''>Search</button>
        </form>
        {/* {slice.map((software)=>{ */}
    {dataSearch.map((software )=>(
      // <a href={`/software/${software._id}`}>
            <Row key={software._id} className='component_single'>
                
                    <Col md={3}>
                        <img className='single_component_img' 
                        src={software.image}
                        alt={software.name}
                        />
                    </Col>
                    <Col md={8}>
                        <h3>{software.name}</h3>
                        <p className='single_component_name'>{software.type}</p>
                        <p className='single_component_details'>{software.discription}</p>
                        <div className='single_link'><a href={software.download_link}><button>See Recording</button></a> <a href={software.details_link}><button>See Class Meterial</button></a></div>
                    </Col>
              
            </Row>
            // </a>
    ))
  }
        {/* })} */}
    
{/* <button className='btn btn-dark d-blobk w-100' onClick={()=> loadmore()}>loadmore</button> */}
        </div>
        </div>
    </Container>
</div>
  );
}

export default Free_software;
