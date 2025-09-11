/*eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Plans from "../components/home/Plans";
import Hero from "../components/home/Hero";
import Reasons from "../components/home/Reasons";
import AboutReach from "../components/about/AboutReach";
import FAQ from "../components/home/Faq";
import Testimonials from "../components/home/Testimonial";
import CTA from "../components/home/CTA";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.jivosite.com/widget/JcnYXSiuty";
    
    document.body.append(script);
  
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Reasons />
      <AboutReach />
      <Testimonials/>
      <Plans />
      <CTA/>
      <FAQ/>
      <Footer />
    </div>
  );
};

export default Home;


