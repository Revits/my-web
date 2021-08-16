import React from 'react';
import './Work.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Work() {
    return (
        <div className='work'>
        
                {/* <div className='image container'>
                    <img src='images/img5.jpg' className='image__img' />
                    <div className='image__overlay'>
                        <div className='image__title'> Image1</div>
                        <p className='image__description'>This is Image</p>
                    </div>
                </div> */}
                <div className='image-grid container'>
                     <img className='image-grid-col-2 image-grid-row-2 zoom-in'src='images/img5.jpg'/>
                     <img src='images/img2.jpg' className='zoom-in'/>
                     <img src='images/img6.jpg' className='zoom-in'/>
                     <img src='images/img7.jpg'className='zoom-in'/>
                     <img src='images/img1.jpg'className='zoom-in'/>
                </div>
                
        </div>
    )
}

export default Work
