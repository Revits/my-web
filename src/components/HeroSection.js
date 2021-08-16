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

const [font, setFont]  = useState('#1d499b');

const setStyle = (font) => {
    setFont(font);
};


    return (
        <div className='container'>
            <Row>
                <Col>
                    <h1 className='name1'>
                        Hi!
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                    <h1 className='name2'>
                     I Am, <span className='name'>M Alif Lukman</span>
                    </h1>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default HeroSection
