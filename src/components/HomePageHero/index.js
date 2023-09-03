import React from "react";
import Header from "../Header";
import Footer from "../Footer";
const phone = "/assets/phone.png";
const cube = "/assets/intro-cube.png";
const cubes = "/assets/intro-cubes.png";
const pillar = "/assets/intro-pillar.png";
const stairs = "/assets/intro-stairs.png";
function HomePageHero() {
  // Component code here
  return (
    <div className="min-h-screen min-w-full bg-black font-agrandirbold">
      <div className="min-h-screen flex-1 bg-hero-pattern bg-no-repeat bg-cover bg-center bg-fixed flex justify-center items-center relative">
        <Header />
        <div className="text-white font-extrabold inline-flex flex-col align-center relative max-h-half self-center justify-self-center">
          <div
            className="z-10 text-center text-9xl lg:text-12xl"
            style={{ lineHeight: 0.86, letterSpacing: 0.5 }}
          >
            CASH
          </div>
          <img
            className="w-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ maxHeight: 453 }}
            src={phone}
            alt=""
          />
          <div
            className="z-30 text-center text-9xl lg:text-12xl"
            style={{ lineHeight: 0.86, letterSpacing: 0.5 }}
          >
            APP
          </div>
          <img
            className="w-auto absolute left-0 top-0 -translate-x-double -translate-y-full z-20"
            style={{ maxWidth: 75 }}
            src={cube}
            alt=""
          />
          <img
            className="w-auto absolute right-0 top-0 translate-x-full -translate-y-1/2 z-20"
            style={{ maxWidth: 200 }}
            src={stairs}
            alt=""
          />
          <img
            className="w-auto absolute left-0 bottom-0 -translate-x-full translate-y-1/2 z-20"
            style={{ maxHeight: 188 }}
            src={cubes}
            alt=""
          />
          <img
            className="w-auto absolute right-0 bottom-0 translate-x-1/2 translate-y-full z-20"
            style={{ maxHeight: 240 }}
            src={pillar}
            alt=""
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePageHero;
