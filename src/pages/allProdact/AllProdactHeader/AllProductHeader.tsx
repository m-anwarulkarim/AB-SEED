import AllProductNavItem from "./AllProductNavItem";

const categories = [
  { name: "সব", path: "/all" },
  { name: "শীতকালীন সবজি", path: "/all/winter" },
  { name: "দেশি সবজি", path: "/all/deshi" },
  { name: "সিম", path: "/all/shim" },
  { name: "মরিচ", path: "/all/morich" },
  { name: "তরমুজ", path: "/all/tormuj" },
  { name: "বেগুন", path: "/all/begun" },
  { name: "কুমড়া", path: "/all/kumra" },
  { name: "ফুলের বীজ", path: "/all/flower-seeds" },
  { name: "আম", path: "/all/mango" },
  { name: "লাউ", path: "/all/lau" },
  { name: "কাকরোল", path: "/all/kakrol" },
  { name: "করলা", path: "/all/korola" },
  { name: "শশা", path: "/all/shosha" },
  { name: "টমেটো", path: "/all/tomato" },
  { name: "ক্যাপসিকাম", path: "/all/capsicum" },
  { name: "মিষ্টি আলু", path: "/all/misti-alu" },
  { name: "শালগম", path: "/all/shalghom" },
  { name: "মুলা", path: "/all/mula" },
  { name: "পেঁপে", path: "/all/pepe" },
];

export default function AllProductHeader() {
  return (
    <div className="flex flex-wrap gap-3 px-4 py-2 border-t">
      {categories.map((cat) => (
        <AllProductNavItem key={cat.path} name={cat.name} path={cat.path} />
      ))}
    </div>
  );
}
