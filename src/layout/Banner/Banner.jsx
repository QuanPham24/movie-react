import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { quanLyPhimServ } from "../../services/quanLiPhim";
import "./banner.scss";

const Banner = () => {
  const [arrBanner, setArrBanner] = useState([]);
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  useEffect(() => {
    quanLyPhimServ
      .getAllBanner()
      .then((res) => {
        console.log("🚀 ~ quanLyPhimServ.getAllBanner ~ res:", res);
        setArrBanner(res.data.content);
      })
      .catch((err) => {
        console.log("🚀 ~ quanLyPhimServ.getAllBanner ~ err:", err);
      });
  }, []);
  return (
    <div className="carousel_banner">
      <Carousel
        nextArrow={<div>Hello</div>}
        prevArrow={<div>Bye</div>}
        arrows={true}
        dot={false}
        afterChange={onChange}
      >
        {arrBanner.map((banner, index) => {
          return (
            <div key={index} className="h-screen-70s">
              <img className="w-full" src={banner.hinhAnh} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
