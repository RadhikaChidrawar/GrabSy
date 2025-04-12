import React from 'react'
import banner1 from '../assets/pharmacist.jpg'
import banner2 from '../assets/babyCare1.jpg'
import banner3 from '../assets/pat.jpeg'

const Categories = [
    {
        title: "Pharmacy Section",
        Image_url: banner1,
    },
    {
        title: "Baby Care Section",
        Image_url: banner2,
    },
    {
        title: "pat Section",
        Image_url: banner3,
    },
]

function CategorySection() {
    return (
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 cursor-pointer'>
            {Categories.map((category, index) => (
                <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    <img src={category.Image_url} alt={category.title} className="w-full h-full object-cover rounded-md shadow-md" />
                    <div className="absolute top-20 left-12">
                        <p className="font-bold text-xl">{category.title}</p>
                        {/* <p className="text-gray-600">View All</p> */}
                        <button className='bg-black text-white p-2 rounded-lg'>View All</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategorySection
