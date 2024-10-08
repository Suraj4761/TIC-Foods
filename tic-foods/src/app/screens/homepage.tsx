"use client";

import Header from "../components/header/header"
import FullWidthCarousel from '../components/banner/banner'
import Listing from "../components/listing/listing";
import {Menu} from "../helpers/dummy";
import Footer from "../components/footer/footer";
import Shopbycategory from "../components/shopbycategory/shopbycategory"
import FloatingWhatsapp from "../components/floatingWhatsApp/floatingWhatsApp"

export default function Home() {
  return (

    <div >
      <Header />
      <FullWidthCarousel />
      <Listing menuItems={Menu} />
      <Shopbycategory/>
      <FloatingWhatsapp/>
      <Footer/>
      
    </div>
  );
}
