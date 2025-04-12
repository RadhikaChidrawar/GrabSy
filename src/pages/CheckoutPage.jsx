
import React, { useState } from 'react';
import { DiCelluloid } from 'react-icons/di';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';

function CheckoutPage() {
    const [billingToggle, setBillingToggle] = useState(true);
    const [shippingToggle, setShippingToggle] = useState(false);
    const [paymentToggle, setPaymentToggle] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("cod");

    const cart = useSelector(state => state.cart)

    const handlePlaceOrder = () => {
        // Show toast notification
        toast.success("Order placed successfully!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000, // Auto close after 3 seconds
        });
    };

    return (
        <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
            <ToastContainer />
            <h3 className="text-2xl font-semibold mb-4">CHECKOUT PAGE</h3>
            <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
                <div className="md:w-2/3">
                    {/* Billing Information */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setBillingToggle(!billingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                            {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700'>Name</label>
                                <input type="text" name='name' placeholder='Enter name' className='w-full px-3 py-2 border rounded-lg' />
                            </div>
                            <div>
                                <label className='block text-gray-700'>Email</label>
                                <input type="email" name='email' placeholder='Enter email' className='w-full px-3 py-2 border rounded-lg' />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone No</label>
                                <input type="text" id="phone" name='phone' placeholder='Enter phone no' className='w-full px-3 py-2 border rounded-lg' />
                            </div>
                        </div>
                    </div>

                    {/* Shipping Information */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setShippingToggle(!shippingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                            {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700'>Address</label>
                                <input type="text" name='address' placeholder='Enter address' className='w-full px-3 py-2 border rounded-lg' />
                            </div>
                            <div>
                                <label className='block text-gray-700'>City</label>
                                <input type="text" name='city' placeholder='Enter city' className='w-full px-3 py-2 border rounded-lg' />
                            </div>
                            <div>
                                <label htmlFor="pincode">Pin Code</label>
                                <input type="text" id="pincode" name='pincode' placeholder='Enter pin code' className='w-full px-3 py-2 border rounded-lg' />
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setPaymentToggle(!paymentToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
                            {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className='flex items-center mb-2'>
                                <input type="radio" name='payment' checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                                <label className='block text-gray-700'> Cash on Delivery</label>
                            </div>
                            <div className='flex items-center mb-2'>
                                <input type="radio" name='payment' checked={paymentMethod === "dc"} onChange={() => setPaymentMethod("dc")} />
                                <label className='block text-gray-700'> Credit Card</label>
                            </div>
                            {paymentMethod === "dc" &&(
                                <div>
                                    <div>
                                        <label className='block text-gray-700'>Card Number</label>
                                        <input type="text" placeholder='ENTER CARD NUMBER' className='w-full px-3 py-2 border rounded-lg'/>
                                    </div>
                                    <div>
                                        <label className='block text-gray-700'>Holder name</label>
                                        <input type="text" placeholder='enter card holder name' className='w-full px-3 py-2 border rounded-lg'/>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="">Expiry date</label>
                                            <input type="text" placeholder='enter card expiry date' className='w-full px-3 py-2 border rounded-lg'/>
                                        </div>
                                        <div>
                                            <label htmlFor="">CVV number</label>
                                            <input type="text" placeholder='enter cvv number' className='w-full px-3 py-2 border rounded-lg' />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* <p>Selected Payment Method: {paymentMethod}</p> Display selected payment method */}
                    </div>
                </div>

                {/* Right Side */}
                <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
                    <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                    <div className="space-y-4">
                        {cart.products.map((product) => (
                            <div key={product.id} className="flex items-center justify-between border-b pb-2">
                                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                                <div className="flex-1 ml-4">
                                    <h4 className="text-md font-semibold">{product.name}</h4>
                                    <p className="text-sm text-gray-600">
                                        ₹{product.price} x {product.quantity}
                                    </p>
                                </div>
                                <span className="font-bold">₹{(product.price * product.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 font-semibold">
                        <span>Total Price:</span>
                        <span>₹{cart.totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-800" onClick={handlePlaceOrder}>
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;