import React, { useDebugValue, useEffect, useMemo } from "react";
import { categories, mockData } from "../assets/mockData";
import heroImage from "../assets/heroSection.jpg";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
// import { setProducts } from "../redux/productSlice";
import ProductCart from "../components/ProductCart";
import Shop from "./Shop";

function Home() {

  const dispatch = useDispatch()
  const product = useSelector(state =>state.product);
  useEffect (()=>{
     dispatch(setProducts(mockData))
  },[])

  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row gap-6">
        {/* Left Side - Categories Section */}
        <div className="w-full md:w-3/12">
          <div className="h-full flex flex-col">
            <div className="bg-red-600 text-white text-md font-bold px-2 py-2.5">
              SHOP BY CATEGORIES
            </div>
            <ul className="space-y-4 bg-gray-100 p-3 border flex-1">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm font-medium cursor-pointer hover:text-red-500 transition-all duration-200"
                >
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side - Hero Section */}
        <div className="w-full md:w-9/12 relative">
          <img
            src={heroImage}
            alt="Hero Section"
            className="w-full rounded-lg"
          />

          {/* Overlay Text on Image */}
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-left text-black animate-fadeIn">
            <p className="text-lg">Grab what you want</p>
            <h2 className="text-3xl font-bold">Welcome To GrabSy</h2>
            <p className="text-sm">Thousand + Products</p>
            <button className="mt-3 bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <CategorySection />

      {/* top oroduct section */}
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">top product</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {product.products.slice(0,5).map(((product)=>(
          <ProductCart product={product}/>
        )))}
        </div>
      </div>

      {/* shop section  */}
        <Shop/>

    </div> 
  );
}

export default Home;
