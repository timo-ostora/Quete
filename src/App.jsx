import { useState } from "react";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Offers from "./Offers.jsx";
import Popular from "./Popular.jsx";
import Mission from "./Mission.jsx";
import Proces from "./Proces.jsx";
import CallToAction from "./CallToAction.jsx";
import Testemony from "./Testemony.jsx";
import Footer from "./Footer.jsx";
function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Offers></Offers>
      <Popular></Popular>
      <Mission></Mission>
      <Proces></Proces>
      <CallToAction></CallToAction>
      <Testemony></Testemony>
      <Footer></Footer>
    </>
  );
}

export default App;
