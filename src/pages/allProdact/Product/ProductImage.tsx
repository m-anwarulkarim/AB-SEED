interface ProductImageProps {
  src: string;
  alt: string;
}

export default function ProductImage({ src, alt }: ProductImageProps) {
  return <img src={src} alt={alt} className="w-full h-[280px] object-cover" />;
}
