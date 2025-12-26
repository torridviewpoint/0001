import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };
  return (
     <div className="w-full pb-16">
          <Heading heading="Our Bestsellers" />
          <Slider {...settings}>
          
            <div className="px-2">
              <Product
                _id="100001"
                img={newArrOne}
                productName="Miss Dior EDP 50ml"
                price="544.00"
                color="Womens"
                badge={true}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
              />
            </div>
            <div className="px-2">
              <Product
                _id="100002"
                img={newArrTwo}
                productName="Jadore EDP 100ml"
                price="599.00"
                color="Womens"
                badge={true}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
              />
            </div>
            <div className="px-2">
              <Product
                _id="100003"
                img={newArrThree}
                productName="Sauvage EDP 100ml"
                price="599.00"
                color="Mens"
                badge={true}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
              />
            </div>
            <div className="px-2">
              <Product
                _id="100004"
                img={newArrFour}
                productName="Hynotic Poision EDP"
                price="799.00"
                color="Womens"
                badge={false}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
              />
            </div>
            
    
            <div className="px-2">
              <Product
                _id="100001"
                img={newArrOne}
                productName="Miss Dior EDP 50ml"
                price="544.00"
                color="Womens"
                badge={true}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
              />
            </div>
            <div className="px-2">
              <Product
                _id="100002"
                img={newArrTwo}
                productName="Jadore EDP 100ml"
                price="599.00"
                color="Womens"
                badge={true}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
              />
            </div>
            <div className="px-2">
              <Product
                _id="100003"
                img={newArrThree}
                productName="Sauvage EDP 100ml"
                price="599.00"
                color="Mens"
                badge={true}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
              />
            </div>
            <div className="px-2">
              <Product
                _id="100004"
                img={newArrFour}
                productName="Hynotic Poision EDP"
                price="799.00"
                color="Womens"
                badge={false}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
              />
            </div>
            
          </Slider>
        </div>
  );
};

export default BestSellers;
