import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Collection() {
    return (
        <div className='container'>
            <Row>
                <Col>
                    <img src='images/img5.jpg' className='d-block w-100' />
                </Col>
                <Col>
                    <img src='images/img5.jpg' className='d-block w-100' />
                </Col>
                <Col>
                    <img src='images/img5.jpg' className='d-block w-100' />
                </Col>
                <Col>
                    <img src='images/img5.jpg' className='d-block w-100' />
                </Col>
            </Row>
            <Row>
                <Col>    
                    <img src='images/img5.jpg' className='d-block w-50' />
                </Col>
            </Row>
        </div>
    )
}

export default Collection
