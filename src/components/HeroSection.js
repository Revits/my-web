import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';



function HeroSection() {

    const [count, setCount]  = useState(0);


    return (
        <div className='container'>
            <Row>
                <Col>
                    <div>
                    <h1 className='name2'>
                     Welcome,
                    </h1>
                    </div>
                </Col>
            </Row>
            <Col>
                    <div className='my__bio'>
                        <div className='my__bio__pp'>
                            <img src='images/my__bio__pp.jpg' alt='mybiopp' />
                        </div>
                        <div className='my__bio__profile'>
                            <p>My friends usually call me Alif or Lukman, i live with my beautiful pregnant wife, right now, im working at bank mandiri as 
                                a release team
                            </p>
                        </div>

                    </div>
                </Col>
        </div>
    )
}

export default HeroSection
