"use client";

import Header from "../components/header/header"
import FullWidthCarousel from '../components/banner/banner'
import Listing from "../components/listing/listing";
import Listingnew from "../components/Features/Features";
import Footer from "../components/footer/footer";
import Shopbycategory from "../components/shopbycategory/shopbycategory"
import FloatingWhatsapp from "../components/floatingWhatsApp/floatingWhatsApp"
import { Menu } from "../helpers/dummy";

export default function Home() {
  return (

    <div >
      <Header />
      <FullWidthCarousel />
      <Listing menuItems={Menu} />
      <Listingnew />
      <Shopbycategory/>
      <FloatingWhatsapp/>
      {/* <Shopping menuItems={Menu} /> */}
      <Footer/>

    </div>
  );
}
