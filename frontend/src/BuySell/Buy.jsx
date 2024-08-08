import React, { useState } from 'react';


const mockProduct = {
  id: 1,
  title: 'Smartphone',
  category: 'electronics',
  price: 15000,
  description: 'A high-quality smartphone with a great camera and fast performance. Perfect for gaming, photography, and daily use.',
  seller: 'John Doe',
  inquiries: 5,
  location: 'New York',
  condition: 'New'
};

function Buy() {
  const [product, setProduct] = useState(mockProduct);

  function handleContact() {
    alert(`Contacting seller ${product.seller} for ${product.title}`);
  }

  function handleBuy() {
    alert(`Buying ${product.title} for ₹${product.price}`);
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-100 to-purple-100 shadow-lg rounded-2xl">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">{product.title}</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <img
            src="/path/to/product-image.jpg" // Replace with actual image source
            alt={product.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        <div>
          <p className="text-gray-700 mb-4"><strong>Category:</strong> {product.category}</p>
          <p className="text-gray-700 mb-4"><strong>Price:</strong> ₹{product.price}</p>
          <p className="text-gray-700 mb-4"><strong>Condition:</strong> {product.condition}</p>
          <p className="text-gray-700 mb-4"><strong>Location:</strong> {product.location}</p>
          <p className="text-gray-700 mb-4"><strong>Inquiries:</strong> {product.inquiries}</p>
          <p className="text-gray-700 mb-6"><strong>Description:</strong> {product.description}</p>
          
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <button
              onClick={handleContact}
              className="bg-gradient-to-r  from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-green-600 transition duration-300 mb-4 sm:mb-0"
            >
              Contact Seller
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
