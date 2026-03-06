const MainSection = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-3 h-125 flex-1 py-10"
      id="services"
    >
      <div
        style={{ backgroundImage: `url(/img/service1.jpg)` }}
        className="bg-cover bg-center bg-no-repeat duration-700"
      >
        <div className="bg-black/75 h-125 flex flex-col justify-center items-center hover:bg-black/0 duration-300">
          <h1 className="text-white text-3xl font-semibold">Public Works</h1>
          <button className="mt-10 border border-[#12BB8F] py-[0.8%] px-[1.5%] text-[#12BB8F] font-semibold rounded-sm cursor-pointer">
            View more
          </button>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(/img/service2.jpg)` }}
        className="bg-cover bg-center bg-no-repeat duration-700"
      >
        <div className="bg-black/75 h-125 flex flex-col justify-center items-center hover:bg-black/0 duration-300">
          <h1 className="text-white text-3xl font-semibold">Real State</h1>
          <button className="mt-10 border border-[#12BB8F] py-[0.8%] px-[1.5%] text-[#12BB8F] font-semibold rounded-sm cursor-pointer">
            View more
          </button>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(/img/service3.jpg)` }}
        className="bg-cover bg-center bg-no-repeat duration-700"
      >
        <div className="bg-black/75 h-125 flex flex-col justify-center items-center hover:bg-black/0 duration-300">
          <h1 className="text-white text-3xl font-semibold">Industrial</h1>
          <button className="mt-10 border border-[#12BB8F] py-[0.8%] px-[1.5%] text-[#12BB8F] font-semibold rounded-sm cursor-pointer">
            View more
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
