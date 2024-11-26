"use client";

import Header from "../components/header/header"
import FullWidthCarousel from '../components/banner/banner'
import Listing from "../components/listing/listing";
import Listingnew from "../components/listing/newListing";
import Footer from "../components/footer/footer";
import Shopbycategory from "../components/shopbycategory/shopbycategory"
import FloatingWhatsapp from "../components/floatingWhatsApp/floatingWhatsApp"
import Shopping from "../shop/page";
import { Menu } from "../helpers/dummy";

export default function Home() {
  return (

    <div >
      <Header />
      <FullWidthCarousel />
      <Listing menuItems={Menu} />
      {/* <Shopping products={Menu}/> */}
      <Shopbycategory/>
      <FloatingWhatsapp/>
      <Footer/>

    </div>
  );
}
