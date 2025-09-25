import { useParams } from "react-router-dom";
import products from "@/components/data/products";
import ProductList from "./Product/ProductList";
import AllProductHeader from "./AllProdactHeader/AllProductHeader";

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="min-h-screen bg-green-100 p-6">
      {" "}
      <AllProductHeader />
      {/* হেডার টাইটেল + কাউন্ট * */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 mt-4">
        <h1 className="text-2xl font-bold text-gray-800 capitalize">
          {category ?? "সকল পণ্য"}
        </h1>
        <p className="text-gray-700 text-sm mt-2 md:mt-0">
          মোট {filteredProducts.length} টি প্রোডাক্ট পাওয়া গেছে
        </p>
      </div>
      {/* প্রোডাক্ট লিস্ট */}
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <div className="text-center text-gray-600 py-10">
          এই ক্যাটাগরিতে কোনো প্রোডাক্ট পাওয়া যায়নি
        </div>
      )}
    </div>
  );
}
