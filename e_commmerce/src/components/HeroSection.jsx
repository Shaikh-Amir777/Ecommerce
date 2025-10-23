import React from "react";

const HeroSection = () => {
  return (
    <section
      className="position-relative vh-100 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://kxadmin.metroshoes.com/banner/Adobe_Express_Metro_Hero_festive_banner_1.gif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      {/* Content */}
      <div className="position-absolute bottom-0 start-0 text-white p-5">
        <h2 className="display-4 fw-light mb-3 font-italic drop-shadow-lg">
          The Festive Story
        </h2>
        <p className="fs-4 mb-4">UP TO 60% OFF + 5% OFF ON PREPAID</p>
        <button className="btn btn-light btn-lg rounded-pill fw-bold">
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
