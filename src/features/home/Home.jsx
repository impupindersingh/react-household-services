import React from "react";
import { HeaderSection, ServiceCard, ServiceStep } from "./components/component-exporter";
import { Card, SlideCard, Testimonials } from "../../resusable-components/resusable-components-exporter";


const Home = () => {
  return (
    <div>
      <HeaderSection/>  
      <Card/>
      <ServiceStep/>
      <Testimonials />
      <SlideCard/>
      <ServiceCard/>
    

    </div>
  );
}

export default Home;
