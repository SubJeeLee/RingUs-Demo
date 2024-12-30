export const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen px-10 bg-white">
      <div className="w-full max-w-screen-md">
        <div className="bg-gradient-to-b from-white to-indigo-300 rounded-2xl shadow-md p-20 text-center mb-20">
          {/* 제목 */}
          <h1 className="text-3xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tighter">
            나의 취업루트
            <br /> 링어스에서 알아보자
          </h1>

          {/* 버튼 */}
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white px-6 py-2 mb-11 rounded-lg font-medium text-sm transition-all">
            Read Exclusive Blogs
          </button>
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl text-center font-bold text-gray-900">
          우리 학과&#183;학교 선배들의 취업 정보부터 멘토링까지
          <br />
          링어스에서 모두 확인하세요.
        </h3>
      </div>
    </section>
  );
};
