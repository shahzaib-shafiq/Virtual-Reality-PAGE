import React from "react";

import Users from "./Users";

import Img from "../assets/img/banner-img.png";
const Banner = () => {
  return (
    <section className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div>
            <h1 className="text-3xl font-bold lg:text-5xl mb-8 leading-snug"
            data-aos='fade-down' data-aos-delay='500'
            >
              Let,s Explore <br /> Three Dimensional Visually{" "}
            </h1>
            <p 
             data-aos='fade-down' data-aos-delay='600'
            className="font-secondary mb-12 m-w-[440px ] mx-auto lg:mx-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              incidunt quam tempora amet, voluptatum ab reiciendis totam
              dignissimos alias quos cum id voluptate iusto voluptas quo
              molestiae laborum voluptatem perferendis!
            </p>
            <div className="flex items-center justify-around space-x-4 m-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start"
             data-aos='fade-down' data-aos-delay='700'
            >
              <button className="btn">Get It Now !</button>
              <a
                className="border-b-2 border-transparent hover:border-white transition ease-out"
                href="#"
              >
                Explore Device
              </a>
            </div>
            <Users />
          </div>
          <div
           data-aos='fade-down' data-aos-delay='800'
          >
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
