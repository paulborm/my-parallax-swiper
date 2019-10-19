import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
import './Swiper.css';

const ITEMS = [
    {
        id: 1,
        type: "is-transparent",
        image: { src: "images/duck.png" }
    },
    {
        id: 2,
        type: "is-cover",
        image: { src: "images/cage.jpg" }
    },
    {
        id: 3,
        type: "is-transparent",
        image: { src: "images/avocado.png" }
    },
    {
        id: 4,
        type: "is-transparent",
        image: { src: "images/pigeon.png" }
    },
    {
        id: 5,
        type: "is-transparent",
        image: { src: "images/seal.png" }
    },
    {
        id: 6,
        type: "is-transparent",
        image: { src: "images/pizza.png" }
    },
    {
        id: 7,
        type: "is-cover",
        image: { src: "images/cage-02.jpg" }
    },
];

const MySwiper = () => {
    const params = {
        parallax: true,
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
    };

    return (
        <div>
            <Swiper {...params}>
                {ITEMS.map((item, index) => (
                    <SwiperItem key={item.id} type={item.type} image={item.image} index={index+1} />
                ))}
            </Swiper>
        </div>
    );
};

const SwiperItem = ({ type, image, index, className }) => {
    return (
        <div className={className}>
            <div className={`item ${type}`} data-swiper-parallax-scale="0.8">
                <div
                    className="layer layer-1"
                    data-swiper-parallax={-50}
                    data-swiper-parallax-opacity={0}
                    data-swiper-parallax-duration={450}
                >
                    {index}
                </div>
                <div className="layer layer-2">
                    <img src={image.src} alt={image.alt} />
                </div>
            </div>
        </div>
    );
};

export default MySwiper;