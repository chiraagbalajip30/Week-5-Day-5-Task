const ProductCard = ({ product }) => {
  return (
    <div className="bg-white ropunded-xl shadow-md hover:shadow-xl hover:scale-105 transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded-t-xl"
      />

      <div className="p-4">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="text-gray-600">₹{product.price}</p>
        <p className="text-yellow-500">⭐ {product.rating}</p>

        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
