import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gradient-to-r from-blue-400 via-violet-700 to-blue-400">
        <div className="container mx-auto py-10 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-4 text-white text-center">About Us</h1>
          <p className="text-lg text-white text-center">
            Our sports website is a one-stop shop for all your sports apparel and equipment needs. We sell a wide variety of products for all types of sports, from soccer to basketball to tennis to golf. We also have a sports section where you can see the scores of the latest games from around the world.
          </p>

          <p className="text-lg text-white text-center">
            Our vision is to be the leading online retailer of sports apparel and equipment. We want to make it easy for our customers to find the products they need at the best prices possible. We also want to provide our customers with a wide range of products to choose from, so they can find the perfect gear for their needs.
          </p>

          <p className="text-lg text-white text-center">
            Our goals are to:
          </p>

          <ul className="list-disc text-white text-center ml-4">
            <li>Provide our customers with the best possible shopping experience.</li>
            <li>Offer a wide range of high-quality products at competitive prices.</li>
            <li>Make it easy for our customers to find the products they need.</li>
            <li>Provide our customers with excellent customer service.</li>
          </ul>

          <p className="text-lg text-white text-center">
            We sell a wide variety of products, including:
          </p>

          <ul className="list-disc text-white text-center ml-4">
            <li>Apparel: Shirts, shorts, pants, jackets, shoes, socks, hats, and more.</li>
            <li>Equipment: Balls, bats, gloves, helmets, pads, sticks, and more.</li>
          </ul>

          <p className="text-lg text-white text-center">
            We also have a sports section where you can see the scores of the latest games from around the world. We have scores for all major sports leagues, as well as for college and international sports.
          </p>

          <p className="text-lg text-white text-center">
            We are committed to providing our customers with the best possible shopping experience. We offer a wide range of products at competitive prices, and we make it easy for our customers to find the products they need. We also provide our customers with excellent customer service.
          </p>

          <p className="text-lg text-white text-center">
            We hope that you will visit our sports website soon and browse our wide selection of products. We are sure that you will find the perfect gear for your needs.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
