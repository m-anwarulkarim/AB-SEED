import { useState } from "react";
import ProductImage from "./ProductImage";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleFavorite?: (id: number) => void;
}

export default function ProductCard({
  product,
  onAddToCart,
  onToggleFavorite,
}: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="border rounded-lg shadow-sm hover:shadow-lg transition bg-white overflow-hidden flex flex-col">
      {/* ছবি */}
      <ProductImage src={product.image} alt={product.name} />

      {/* কনটেন্ট */}
      <div className="p-3 flex flex-col flex-1">
        {/* নাম */}
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>

        {/* ডিসক্রিপশন */}
        <p className="text-sm text-gray-600 line-clamp-3 mt-1">
          {product.description}
        </p>

        {/* দাম */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-green-700 font-bold">
            {product.offerPrice} টাকা
          </span>
          <span className="text-red-500 line-through text-sm">
            {product.regularPrice} টাকা
          </span>
        </div>

        {/* অ্যাকশন বাটন */}
        <div className="mt-auto flex justify-between items-center pt-3 border-t">
          {/* ফেভারিট */}
          <button
            onClick={() => onToggleFavorite?.(product.id)}
            className="text-gray-500 hover:text-red-500 flex items-center gap-1"
          >
            ❤️
          </button>

          {/* কার্টে যুক্ত করুন */}
          <button
            onClick={() => onAddToCart?.(product)}
            className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
          >
            🛒 কার্টে যুক্ত করুন
          </button>

          {/* বিস্তারিত */}
          <button
            onClick={() => setShowDetails(true)}
            className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
          >
            ℹ️ বিস্তারিত
          </button>
        </div>
      </div>

      {/* বিস্তারিত মডাল */}
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-4">{product.longDescription}</p>
            <button
              onClick={() => setShowDetails(false)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
