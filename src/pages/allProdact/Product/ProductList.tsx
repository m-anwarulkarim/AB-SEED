// ProductList.tsx
import ProductCard from "./ProductCard";
import type { Product } from "@/types/product";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div
      className="
        grid
        grid-cols-2         /* মোবাইল: ২ কলাম */
        gap-1.5             /* মোবাইল: 6px গ্যাপ (0.375rem) */
        sm:grid-cols-2      /* ছোট ট্যাবও ২ কলাম */
        sm:gap-3            /* বড় স্ক্রিনে একটু বেশি গ্যাপ */
        md:grid-cols-3
        md:gap-4
        lg:grid-cols-4
        lg:gap-6
      "
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
