"use client";

import Header from "../components/header/header"
import FullWidthCarousel from '../components/banner/banner'
import Listing from "../components/listing/listing";
import {Menu} from "../helpers/dummy"

export default function Home() {
  return (

    <div >
      <Header />
      <FullWidthCarousel />
      <Listing menuItems={Menu} />
    
    </div>
  );
}
