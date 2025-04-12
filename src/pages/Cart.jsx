import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import empaty from "../assets/empaty.jpeg";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../components/Modal";
import { decressQuentity, incressQuentity, removeFromCart } from "../redux/cartSlice";
import { Navigate, useNavigate } from "react-router-dom";
import ChangeAddress from '../components/ChangeAddress'



function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("xyz ,000");
  const [isModalOpen , setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Shopping cart</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-sm font-bold">
                <p>products</p>
                <div className="flex space-x-8">
                  <p>price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                  <p>Remove</p>
                </div>
              </div>
              <div>
                {cart.products.map((products) => (
                  <div
                    key={products.id}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={products.image}
                        alt={products.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex ml-4">
                        <h3 className="text-lg font-semibold">
                          {products.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex space-x-12 items-center">
                      <p>{products.price}</p>
                      <div className="flex items-center justify-center border">
                        <button 
                          className="text-xl font-bold px-1.5 border-r"
                           onClick={()=>dispatch(decressQuentity(products.id))}
                        >
                          -
                        </button>
                        <p className="text-xl px-2">{products.quantity}</p>
                        <button 
                          className="text-xl px-1 border-l"
                          onClick={()=>dispatch(incressQuentity(products.id))}
                        > 
                          + 
                        </button>
                      </div>
                      <p>₹{(products.quantity * products.price).toFixed(2)}</p>
                      <button className="text-red-500 hover:text-red-700"
                        onClick={() => dispatch(removeFromCart(products.id))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* right side */}
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items :</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">
                  Shipping to :
                  <span className="text-sm font-bold"> {address}</span>
                </p>
                <button className="text-blue-500 hover:underline mt-1 ml-2"
                  onClick={()=> setIsModalOpen(true)}
                >
                  change address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>total price</span>
                <span>₹{cart.totalPrice.toFixed(2)}</span>
              </div>
              <button 
                className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
                onClick={()=> navigate('/checkout')}
              >
                process to checkout
              </button>
            </div>
          </div>
          <Modal>
            isModuleOpen={isModalOpen}
            setIsModalOpen = {setIsModalOpen}
            <ChangeAddress/>
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={empaty} alt="" className="h-96" />
        </div>
      )}
    </div>
  );
}

export default Cart;
