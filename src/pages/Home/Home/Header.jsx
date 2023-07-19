import React from 'react';
import slide1 from '../../../../public/slide1.jpg'
import slide2 from '../../../../public/slide2.jpg'
const Header = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img  src={slide1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={slide2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={slide1} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={slide2} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Header;