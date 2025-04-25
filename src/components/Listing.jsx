import React, { useState } from 'react';
import { MdCleaningServices, MdCarpenter, MdElectricBolt, MdOutlinePlumbing } from 'react-icons/md';
import { AiFillFormatPainter } from 'react-icons/ai';
import { FaTruck } from 'react-icons/fa';
import alldata from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Listing = ({ searchCity }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate=useNavigate()
  const handleBookNow = (product) => {
    navigate('/book', { state: { product } }); 
  };
  const categories = ['Cleaning', 'Carpentering', 'Painting', 'Electric', 'Plumbing', 'Shifting'];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  
  const filteredProducts = alldata
    .filter((item) => {
      const matchesCity = searchCity
        ? item.city.toLowerCase().includes(searchCity.toLowerCase())
        : true;
      const matchesCategory = selectedCategory
        ? item.category === selectedCategory ||
          (selectedCategory === 'Shifting' && item.category === 'driving')
        : true;
      return matchesCity && matchesCategory;
    })
    .slice(0, 6); 

  return (
    <div className="shadow py-6 mt-10">
      <div className="mb-6 flex justify-center space-x-4 flex-wrap">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`flex flex-col items-center justify-center bg-purple-100 w-30 h-30 rounded cursor-pointer p-4 ${
              selectedCategory === category ? 'border-2 border-purple-500' : ''
            }`}
          >
            {category === 'Cleaning' && (
              <MdCleaningServices className="h-10 w-10 text-purple-800" />
            )}
            {category === 'Carpentering' && (
              <MdCarpenter className="h-10 w-10 text-yellow-800" />
            )}
            {category === 'Painting' && (
              <AiFillFormatPainter className="h-10 w-10 text-cyan-400" />
            )}
            {category === 'Electric' && (
              <MdElectricBolt className="h-10 w-10 text-blue-300" />
            )}
            {category === 'Plumbing' && (
              <MdOutlinePlumbing className="h-10 w-10 text-blue-800" />
            )}
            {category === 'Shifting' && (
              <FaTruck className="h-10 w-10 text-red-800" />
            )}
            <p className="text-xl text-purple-500">{category}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="h-auto w-full rounded shadow flex flex-col justify-between p-4"
            >
              <img
                src={product.image}
                className="w-full h-40 object-cover rounded"
                alt={product.title}
              />
              <div className="mt-4">
                <h3 className="text-lg bg-purple-200 rounded-full w-40 text-center">{product.title}</h3>
                <p>
                  <strong>Person name:</strong> {product.person}
                </p>
                <p>
                  <strong>Contact:</strong> {product.contact}
                </p>
                <p>
                  <strong>Area:</strong> {product.area}
                </p>
                <p>
                  <strong>City:</strong> {product.city}
                </p>
                <button onClick={()=>{handleBookNow(product); scrollTo(0,0);}} className='mt-3 bg-purple-400 w-30 h-10 cursor-pointer rounded'>Book now</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            {searchCity
              ? `No services found in ${searchCity}.`
              : 'Select a category or search for a city to see services.'}
          </p>
        )}
      </div>
    </div>
  );
};

export default Listing;