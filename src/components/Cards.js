import React from 'react'
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Latest Picture</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img1.jpg'
                            text='Lens : Fuji XF 35mm 2.0'
                            label='Photography'
                            path='/Photos'
                        />
                        <CardItem
                            src='images/img1.jpg'
                            text=''
                            label='Photography'
                            path='/Photos'
                        />
                        <CardItem
                            src='images/img1.jpg'
                            text=''
                            label='Photography'
                            path='/Photos'
                        />
                    </ul>
                </div>
            </div>  
        </div>
    )
}

export default Cards
