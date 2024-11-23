
import './App.css'

function App() {

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      image: 'https://via.placeholder.com/300x200',
      price: '$120',
      discount: '20% Off',
    },
    {
      id: 2,
      name: 'Smartphone',
      image: 'https://via.placeholder.com/300x200',
      price: '$799',
      discount: '15% Off',
    },
    {
      id: 3,
      name: 'Laptop',
      image: 'https://via.placeholder.com/300x200',
      price: '$1500',
      discount: '10% Off',
    },
    {
      id: 4,
      name: 'Smart Watch',
      image: 'https://via.placeholder.com/300x200',
      price: '$250',
      discount: '30% Off',
    },
  ];

  return (
    <>
        <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="w-full bg-blue-600 text-white py-4">
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold">JR Products</div>
          <ul className="flex space-x-6">
            <li className="hover:text-gray-200 transition">Home</li>
            <li className="hover:text-gray-200 transition">Shop</li>
            <li className="hover:text-gray-200 transition">Contact</li>
            <li className="hover:text-gray-200 transition">Cart</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to JR Products</h1>
        <p className="text-lg mb-6">
          Discover the best deals on the latest tech products!
        </p>
        <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 hover:text-blue-500 transition">
          Shop Now
        </button>
      </section>

      {/* Product Listing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-500 mb-1">{product.price}</p>
                <span className="text-sm text-green-600 font-bold">{product.discount}</span>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
        <p className="text-lg mb-6">Grab the best deals while they last.</p>
        <button className="px-10 py-4 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 hover:text-blue-500 transition">
          View All Products
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-gray-400 text-center">
        <p>&copy; 2024 JR Products. All Rights Reserved.</p>
      </footer>
    </div>
    </>
  )
}

export default App
