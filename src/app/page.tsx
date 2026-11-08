import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import { getAllProducts } from "@/lib/api";
import { IProducts } from "@/types/productsType";
import Image from "next/image";
export const instant = false



export default async function Home() {
  const data = await getAllProducts()
const products:IProducts[] = data

  return (
    <div>
      <Banner/>
      <AllProducts products={products}/>
    </div>
  );
}
