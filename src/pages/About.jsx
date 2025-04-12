import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h2>

        <p className="text-gray-600 text-lg text-center">
          Welcome to <span className="font-semibold text-blue-600">GrabSy</span>, your one-stop destination for all your shopping needs. 
          We aim to provide a seamless and convenient shopping experience with a wide range of products, ensuring quality and affordability.
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">Our Mission</h3>
          <p className="text-gray-600">
            Our mission is to bridge the gap between customers and high-quality products, offering a platform where shopping becomes easy, fast, and reliable.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">Why Choose Us?</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Wide variety of products to choose from.</li>
            <li>Fast and reliable delivery service.</li>
            <li>Secure payment methods for safe transactions.</li>
            <li>24/7 customer support for all inquiries.</li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            <span className="font-semibold">Join us today</span> and experience the best online shopping journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
