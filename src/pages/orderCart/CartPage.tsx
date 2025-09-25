import { useCart } from "@/components/cart/CartContext";
import { FaTrash, FaPlus, FaMinus, FaHeart, FaRegHeart } from "react-icons/fa";

export default function CartPage() {
  const { state, dispatch } = useCart();
  const items = state.items;

  const total = items.reduce(
    (sum, item) => sum + item.offerPrice * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-green-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
        🛒 আপনার অর্ডার কার্ট
      </h1>

      {items.length === 0 ? (
        <div className="text-center text-gray-600 py-10">
          আপনার কার্ট খালি! <br />
          <a href="/all" className="text-green-600 underline">
            পণ্য দেখুন
          </a>
        </div>
      ) : (
        <>
          {/* কার্ট আইটেম */}
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.productId}
                className="bg-white rounded-lg shadow p-4 flex flex-wrap sm:flex-nowrap items-center gap-4 w-full"
              >
                {/* 📷 Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded shrink-0"
                />

                {/* 📝 Info */}
                <div className="min-w-[180px] flex-1">
                  <h2 className="text-sm sm:text-base font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    {item.isBranded
                      ? "ব্র্যান্ডেড পণ্য"
                      : "নন-ব্র্যান্ডেড পণ্য"}
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    হিসাব: ৳{item.offerPrice} × {item.quantity} = ৳
                    {item.offerPrice * item.quantity}
                  </p>
                </div>

                {/* 💰 Price Section */}
                <div className="flex flex-col items-center justify-center min-w-[140px] shrink-0 text-center">
                  <p className="text-green-700 font-bold text-sm sm:text-base">
                    ছাড় মূল্য: ৳{item.offerPrice}
                  </p>
                  <p className="text-red-500 line-through text-xs sm:text-sm">
                    রেগুলার: ৳{item.regularPrice}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <button className="text-gray-500 hover:text-red-500">
                      {item.isFavorite ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_ITEM",
                          payload: item.productId,
                        })
                      }
                      className="text-red-500 hover:text-red-600"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>

                {/* 🔢 Quantity (প্রস্থে) */}
                <div className="flex flex-row items-center gap-2 min-w-[120px] justify-center">
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREMENT", payload: item.productId })
                    }
                    className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 text-sm"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREMENT", payload: item.productId })
                    }
                    className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 text-sm"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Total + Checkout */}
          <div className="bg-white rounded-lg shadow p-4 mt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">মোট:</span>
              <span className="text-green-700 font-bold text-xl">
                ৳ {total}
              </span>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              ✅ অর্ডার করুন
            </button>
          </div>
        </>
      )}
    </div>
  );
}
