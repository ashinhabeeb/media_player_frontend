// import { faViacoin } from '@fortawesome/free-brands-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




function Header() {
  return (
    <>
        <Navbar className="bg-transparent">
        <Container>
          <Navbar.Brand className='text-warning fs-3'>
            <FontAwesomeIcon icon={faVideo} />{' '}
            Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
