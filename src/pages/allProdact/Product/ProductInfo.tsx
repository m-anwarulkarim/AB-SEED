interface ProductInfoProps {
  name: string;
  price: number;
}

export default function ProductInfo({ name, price }: ProductInfoProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-green-700 font-bold text-base mt-1">
        {price.toLocaleString("bn-BD")} টাকা
      </p>
    </div>
  );
}
