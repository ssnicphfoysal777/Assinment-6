import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import { getAllProducts } from "@/lib/api";
import Image from "next/image";

export default async function Home() {
  const data = await getAllProducts()
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner/>
      <AllProducts/>
    </div>
  );
}
