import { Footer } from "../Landing/sections/Footer";
import { Header } from "../Landing/sections/Header";
import { Hero } from "../Landing/sections/Hero";
import { Last } from "../Landing/sections/Last";
import { ProductShowcase } from "../Landing/sections/ProductShowcase";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductShowcase />
      <Last />
      <Footer />
    </>
  );
}
