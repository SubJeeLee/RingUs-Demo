export const Last = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen px-10 bg-white">
      <div className="container flex flex-col text-center justify-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tighter mb-7">
          만남이 이어짐으로
        </h1>
        <p className="text-sm">
          링어스를 통해 만나는 <br /> 우리 학교 선배와의 유익한 대화의 기회{" "}
          <br /> 지금 바로 시작해보세요{" "}
        </p>
      </div>
      <button className="inline-block bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 mt-8 rounded-lg font-bold text-sm transition-all">
        시작하기{" "}
      </button>
    </section>
  );
};
