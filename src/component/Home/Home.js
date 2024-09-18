import React from "react";
import Banner from "./Banner";
import Profession from "./Profession";
import NeonatologySection from "./NeonatologySection";
import NeonatalTelehealth from "./NeonatalTelehealth";
import CommanQ from "./CommanQ";

import { Carousel } from "react-responsive-carousel";
import HomeService from "./HomeServices";

import Ourchannelpartner from "./Ourchannelpartner"; // import Carosel from './Carosel'
import OurServices from "../Services/OurServices";
import OurServicesHomesection from "./Ourservices-homesection";
import OurTeam from "./OurTeam";
// import Ourchannelpartner from './ourchannelpartner'// import Carosel from './Carosel'

function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Banner />
      <OurServicesHomesection />
      {/* <HomeService/> */}
      {/* <OurServices/> */}
      <NeonatologySection />
      <Ourchannelpartner />

      {/* <NeonatalTelehealth/>
      <Profession/> */}
      <OurTeam />
      <CommanQ />
    </div>
  );
}

export default Home;
