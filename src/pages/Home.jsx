import React from 'react'
import CarouselController from '../components/CarouselController';
import Form from '../components/Form';
import NavbarController from '../components/NavbarController';
import { Container, Row, Col } from 'react-bootstrap';

import '../App.css'

const Home = () => {
    return (
           <Container fluid className='bg-black-container text-white'>
                <Row>
                    <Col>
                        <NavbarController />
                    </Col>
                </Row>
                <Row className='align-items-center mt-5'>
                    <Col xs={12} xl={7} className='mb-5'>
                        <CarouselController />
                    </Col>
                    <Col xs={12} xl={5}>
                        <Form />
                    </Col>
                </Row>
            </Container>
    )
}

export default Home