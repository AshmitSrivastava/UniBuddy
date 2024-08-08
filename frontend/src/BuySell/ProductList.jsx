import React, { useState } from 'react';

const mockProducts = [
  { id: 1, title: 'Calci', category: 'Electronics', price: 15000, description: 'A high-quality smartphone with a great camera.', seller: 'John Doe' },
  { id: 2, title: 'EG Sheets', category: 'EG', price: 3000, description: 'A trendy jacket for all seasons.', seller: 'Jane Smith' },
  { id: 3, title: 'M1 Kumbhojkar', category: 'FE', price: 2000, description: 'An easy-to-use coffee maker for a perfect brew.', seller: 'Emily Johnson' },
 
];

function ProductList() {
  const [products, setProducts] = useState(mockProducts);
  const [filter, setFilter] = useState('all');

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  function handleContact(id) {
    const product = products.find((p) => p.id === id);
    alert(`Contacting seller ${product.seller} for ${product.title}`);
  }



  const filteredProducts = filter === 'all' ? products : products.filter((p) => p.category === filter);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-100 to-purple-100 shadow-lg rounded-2xl">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Products</h2>
      
      <div className="mb-8 flex justify-center">
        <select
          value={filter}
          onChange={handleFilterChange}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
                    <option value="" disabled>Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="FE">FE</option>
            <option value="SE">SE</option>
            <option value="TE">TE</option>
            <option value="BE">BE</option>
            <option value="EG">EG</option>
            <option value="Workshop">Workshop</option>
            <option value="Competitive Exams">Competitive Exams</option>
            <option value="Others">Others</option>
          </select>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-2">Category: {product.category}</p>
            <p className="text-gray-600 mb-2">Price: ₹{product.price}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between">
                   

<button
  onClick={() => handleContact(product.id)}
  className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-green-600 transition duration-300"
>
       Contact Seller
</button>

           
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
