import productImgae from "../../assets/product-image.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] pb-20">
      <div className="container ">
        <p className="font-bold text-indigo-500 mb-3">취업 정보</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tighter mb-10">
          선배들의 직장, 커리어부터
          <br />
          취업 팁까지
        </h2>
        <LazyLoadImage src={productImgae} alt="Product Image" className="" />
      </div>
    </section>
  );
};
