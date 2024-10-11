"use client";

import Header from "../components/header/header"
import FullWidthCarousel from '../components/banner/banner'
import Listing from "../components/listing/listing";
import Listingnew from "../components/listing/newListing";
import Footer from "../components/footer/footer";
import Shopbycategory from "../components/shopbycategory/shopbycategory"
import FloatingWhatsapp from "../components/floatingWhatsApp/floatingWhatsApp"
import '../globals.css';  // Custom CSS (if needed)
import Features from "../components/Features/Features";
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  return (

    <div style={{ overflow: 'hidden' }}>
       <ToastContainer
                      position="top-right"
                      autoClose={1000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="success"
                      />
      <Header />
      <FullWidthCarousel />
      <Listing />
      {/* <Listingnew /> */}
      <Features />
      <Shopbycategory/>
      <FloatingWhatsapp/>
      <Footer/>
    </div>
  );
}
