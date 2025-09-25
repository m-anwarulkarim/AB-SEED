import { useState } from "react";
import ProductImage from "./ProductImage";
import type { Product } from "@/types/product";
import {
  FaHeart,
  FaRegHeart,
  FaCartPlus,
  FaInfoCircle,
  FaTrash,
} from "react-icons/fa";
import { useCart } from "@/components/cart/CartContext";

interface ProductCardProps {
  product: Product;
  onToggleFavorite?: (id: number) => void;
}

export default function ProductCard({
  product,
  onToggleFavorite,
}: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        productId: product.id,
        name: product.name,
        image: product.image,
        offerPrice: product.offerPrice,
        regularPrice: product.regularPrice,
        quantity: 1,
        description: product.description,
        isBranded: product.isBranded,
        isFavorite: product.isFavorite ?? false,
      },
    });
  };

  return (
    <>
      <div className="border rounded-lg shadow-sm hover:shadow-lg transition bg-white overflow-hidden flex flex-col">
        <ProductImage src={product.image} alt={product.name} />

        <div className="p-3 flex flex-col flex-1">
          <h2 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h2>

          <p className="text-sm text-gray-600 line-clamp-3 mt-1">
            {product.description}
          </p>

          <div className="mt-2 flex items-center gap-2">
            <span className="text-green-700 font-bold">
              {product.offerPrice} টাকা
            </span>
            <span className="text-red-500 line-through text-sm">
              {product.regularPrice} টাকা
            </span>
          </div>

          <div className="mt-auto flex justify-between items-center pt-3 border-t">
            <button
              onClick={() => onToggleFavorite?.(product.id)}
              className="text-gray-500 hover:text-red-500 flex items-center gap-1"
            >
              {product.isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>

            <button
              onClick={handleAddToCart}
              className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
            >
              <FaCartPlus /> কার্টে যুক্ত করুন
            </button>

            <button
              onClick={() => setShowDetails(true)}
              className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
            >
              <FaInfoCircle /> বিস্তারিত
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg relative">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            >
              ✖
            </button>

            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded mx-auto mb-4"
            />

            <h3 className="text-xl font-bold text-center mb-2">
              {product.name}
            </h3>
            <p className="text-gray-700 text-center mb-2">
              {product.longDescription}
            </p>

            <div className="text-center mb-3">
              <p className="text-green-700 font-bold">
                ছাড় মূল্য: ৳{product.offerPrice}
              </p>
              <p className="text-red-500 line-through text-sm">
                রেগুলার: ৳{product.regularPrice}
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-4">
              <button
                onClick={() => onToggleFavorite?.(product.id)}
                className="text-gray-500 hover:text-red-500"
              >
                {product.isFavorite ? <FaHeart /> : <FaRegHeart />}
              </button>
              <button className="text-red-500 hover:text-red-600">
                <FaTrash />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              🛒 কার্টে যুক্ত করুন
            </button>
          </div>
        </div>
      )}
    </>
  );
}
