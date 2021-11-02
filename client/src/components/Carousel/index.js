import React from 'react';
import { Carousel, Button } from 'antd';
import CarouselOne from '../../assets/Carousel1(2).png'
import CarouselTwo from '../../assets/Carousel2.png'


function FoodCarousel() {

    const contentStyle = {
        height: '700px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',

    };


    return (
        <div >
            <Carousel autoplay="true">
                <div>
                    <img className="carousel" ></img>

                </div>
                <div>
                    <img className="carousel2" ></img>
                </div>


            </Carousel>

        </div>
    )
}

export default FoodCarousel