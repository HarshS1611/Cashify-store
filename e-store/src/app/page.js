import Image from "next/image";
import Navbar from "./components/navbar";
import MainSection from "./components/home/mainSection";
import Sale from "./components/home/flashSale";
import Categories from "./components/home/Categories"
export default function Home() {
  return (
    <div>
      <Navbar/>
      <MainSection/>
      <Sale/>
      <Categories/>
    </div>
  );
}
