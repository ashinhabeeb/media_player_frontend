import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
     <Container className='d-flex justify-content-center align-items-center py-5 px-4'>
      <Row className='mt-5 w-100 d-flex justify-content-center align-items-center'>
       
        <Col md={6}>
        <h3>Welcome to <span className='text-warning'>Media Player</span> </h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quam voluptatibus nesciunt esse sit earum maxime hic veritatis beatae optio, consectetur voluptates assumenda doloribus officiis minima dolores? Exercitationem, reprehenderit ducimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, sint! Hic, esse sequi commodi laudantium adipisci, consequuntur fuga voluptatum aspernatur consequatur id, velit at asperiores sed nesciunt a minus sapiente.</p>

        <Link to={'/home'}><button className='btn btn-warning mt-4'>Get Started</button></Link>
    
        
        </Col>
        <Col md={1}></Col>
        <Col md={5}>
        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="no-image" className='w-100 rounded-4 mt-md-0 mt-5' />        
        </Col>
      </Row>
    </Container>
    <Container>
    <Row>
        <h2 className='text-center'>Features</h2>
        <Col md={1}></Col>
        <Col md={10} className='d-flex justify-content-between'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media1.tenor.com/m/y5DrU1cjqkYAAAAd/sound-waves.gif" style={{height:'250px'}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
     </Card>

     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media1.tenor.com/m/6zbINPNs3xQAAAAd/wave.gif" style={{height:'250px'}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
     </Card>

     <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://media1.tenor.com/m/b8o4QL3NxV4AAAAC/sound-wave-waves.gif" style={{height:'250px'}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
     </Card>
     
        </Col>

        <Col md={1}></Col>
      </Row>
    </Container>

    <div className="container mt-5 p-5">
      <div className="row">
      <div className='border border-secondary border-2'>
          <div className="col-md-6">
            <h2 className='text-warning'   >Simple Fast and powerful</h2>
            <p><span className='fs-4'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestiae voluptatibus atque enim deserunt perspiciatis nam quod modi placeat rerum minima optio temporib </p>
  
            <p><span className='fs-4'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestiae voluptatibus atque enim deserunt perspiciatis nam quod modi placeat rerum minima optio temporib </p>
  
            <p><span className='fs-4'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestiae voluptatibus atque enim deserunt perspiciatis nam quod modi placeat rerum minima optio temporib </p>
            
          </div>
      </div>
        <div className="col-md-6"></div>
      </div>
    </div>
    </>

  )
}

export default Landing
