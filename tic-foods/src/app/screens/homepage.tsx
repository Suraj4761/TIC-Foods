"use client";

import Header from "../components/header/header"
import FullWidthCarousel from '../components/banner/banner'
import Listing from "../components/listing/listing";
import {Menu} from "../helpers/dummy";
import Footer from "../components/footer/footer";
import Shopbycategory from "../components/shopbycategory/shopbycategory"

export default function Home() {
  return (

    <div >
      <Header />
      <FullWidthCarousel />
      <Shopbycategory/>
      <Listing menuItems={Menu} />
      <Footer/>
      
    </div>
  );
}
