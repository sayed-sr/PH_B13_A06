const Cart = ({ cart, removeFromCart, handleCheckout }) => {
  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 text-left">
      <h3 className="text-3xl font-bold mb-8">Your Cart</h3>
      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg italic">Your cart is currently empty.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-6">
                <img src={item.icon} className="w-12 h-12" alt="" />
                <div>
                  <p className="text-lg font-bold text-gray-800">{item.name}</p>
                  <p className="text-purple-600 font-semibold">${item.price}</p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-pink-500 font-bold hover:underline">Remove</button>
            </div>
          ))}
          <div className="flex justify-between items-center border-t border-dashed border-gray-300 pt-8 mt-8">
            <span className="text-xl text-gray-500 font-medium">Total:</span>
            <span className="text-4xl font-black text-gray-900">${totalCost}</span>
          </div>
          <button onClick={handleCheckout} className="w-full mt-8 bg-purple-600 text-white py-5 rounded-2xl text-xl font-black shadow-lg hover:bg-purple-700 transition">
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
  );
};
export default Cart;