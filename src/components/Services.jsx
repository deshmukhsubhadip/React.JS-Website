import React from 'react';
import { Carousel } from "react-responsive-carousel"; // Correct capitalization for Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importing carousel CSS
import img3 from "../assets/Service1.jpg"; // Correct import
import img4 from "../assets/image3.webp"; // Corrected the image import
import img5 from "../assets/footer.webp";
import img6 from "../assets/footer2.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel infiniteLoop autoPlay showStatus={false} interval={1000} showThumbs={false}>
        <div>
          <img src={img4} alt="Full Stack" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img3} alt="Peer-to-Peer Support" />
          <p className="legend">Peer-to-Peer Support</p>
        </div>
        <div>
          <img src={img5} alt="Peer-to-Peer Support" />
          <p className="legend">Solving problems</p>
        </div>
        <div>
          <img src={img6} alt="Peer-to-Peer Support" />
          <p className="legend">Learn Easy Methods</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
