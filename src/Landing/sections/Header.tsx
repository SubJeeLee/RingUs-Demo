import Logo from "../../assets/image.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
//import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 shadow-md">
      {/* 메인 헤더 섹션 */}
      <div className="py-4">
        <div className="w-full max-w-screen-md container px-1">
          <div className="flex items-center justify-between">
            {/* 로고 */}
            <LazyLoadImage src={Logo} alt="Saas Logo" height={50} width={50} />

            {/* 메뉴 아이콘 (모바일용) */}
            {/* <MenuIcon className="h-6 w-6 md:hidden cursor-pointer" /> */}

            {/* 내비게이션 메뉴 (데스크탑용) */}
            <nav className="hidden md:flex gap-6 text-black/70 items-center">
              <a href="#" className="hover:text-black">
                링어스
              </a>
              <a href="#" className="hover:text-black">
                멘토링
              </a>
              <a href="#" className="hover:text-black">
                신청현황
              </a>
              <a href="#" className="hover:text-black">
                고객센터
              </a>
              <a href="#" className="text-indigo-500 font-medium">
                로그인
              </a>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight transition-colors">
                회원가입
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
