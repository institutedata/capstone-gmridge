import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import './AboutStyles.css';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://static.vecteezy.com/system/resources/thumbnails/003/127/954/small/abstract-template-blue-background-white-squares-free-vector.jpg"
        title="About Us"
      />
      <div className="about-container">
        <div className="about-content">
          <h2>Who We Are</h2>
          <p>We are a small startup tech company passionate about simplifying tax-related tasks for individuals and businesses. Our journey began with a simple idea: to create a mileage tracker app that makes it easier for people to claim mileage on their taxes.</p>
          <br></br>
          <h2>Our Mission</h2>
          <p>Our mission is to empower individuals and businesses by providing them with user-friendly tools to manage their finances efficiently. We strive to innovate and create solutions that streamline tedious processes and save valuable time.</p>
          <br></br>
          <h2>Why Choose Us?</h2>
          <p>With our dedication to user experience and our commitment to excellence, we aim to be the go-to choice for anyone looking for reliable and convenient financial tools. We prioritize customer satisfaction and continually work to improve our products to meet the evolving needs of our users.</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
