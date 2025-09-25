import { useCart } from "@/components/cart/CartContext";
import type { Product } from "@/types/product";
import { FaHeart, FaRegHeart, FaTrash } from "react-icons/fa";

interface Props {
  product: Product;
  onClose: () => void;
}

export default function ProductDetailsModal({ product, onClose }: Props) {
  const { dispatch } = useCart();

  return (
    <div className="fixed inset-0 bg-gray-500/60 bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 relative">
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
        >
          ✖
        </button>

        {/* 🖼️ Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-cover rounded mx-auto mb-4"
        />

        {/* 🏷️ Name + Description */}
        <h2 className="text-lg font-bold text-center text-gray-800">
          {product.name}
        </h2>
        <p className="text-sm text-gray-600 text-center mb-2">
          {product.longDescription}
        </p>

        {/* 📊 হিসাব */}
        <p className="text-sm text-gray-700 text-center mb-2">
          হিসাব: ৳{product.offerPrice} × 1 = ৳{product.offerPrice}
        </p>

        {/* 💰 Price + Actions */}
        <div className="text-center mb-4">
          <p className="text-green-700 font-bold">
            ছাড় মূল্য: ৳{product.offerPrice}
          </p>
          <p className="text-red-500 line-through text-sm">
            রেগুলার: ৳{product.regularPrice}
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <button className="text-gray-500 hover:text-red-500">
              {product.isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
            <button className="text-red-500 hover:text-red-600">
              <FaTrash />
            </button>
          </div>
        </div>

        {/* 🛒 Add to Cart */}
        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          🛒 কার্ডে যোগ করুন
        </button>
      </div>
    </div>
  );
}
