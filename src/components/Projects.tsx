const Projects = () => {
  return (
    <div id="projects">
      <div className="text-center my-15">
        <h1 className="text-4xl font-semibold">Projects</h1>
        <p className="border-2 inline-block w-10 border-[#0FCA98]"></p>
      </div>
      <div className="mx-[15%] mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          style={{ backgroundImage: `url(/img/pro1.jpg)` }}
          className="bg-cover bg-center bg-no-repeat duration-700"
        >
          <div className="bg-black/75 h-70 flex flex-col justify-center items-center hover:bg-black/30 duration-300">
            <h1 className="text-white text-3xl font-semibold">Bogota</h1>
            <button className="mt-10 border py-[0.8%] px-[1.5%] text-white font-semibold rounded-sm cursor-pointer">
              View more
            </button>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(/img/pro2.jpg)` }}
          className="bg-cover bg-center bg-no-repeat duration-700"
        >
          <div className="bg-black/75 h-70 flex flex-col justify-center items-center hover:bg-black/30 duration-300">
            <h1 className="text-white text-3xl font-semibold">
              Cidade do México
            </h1>
            <button className="mt-10 border py-[0.8%] px-[1.5%] text-white font-semibold rounded-sm cursor-pointer">
              View more
            </button>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(/img/pro3.jpg)` }}
          className="bg-cover bg-center bg-no-repeat duration-700"
        >
          <div className="bg-black/75 h-70 flex flex-col justify-center items-center hover:bg-black/30 duration-300">
            <h1 className="text-white text-3xl font-semibold">Lima</h1>
            <button className="mt-10 border py-[0.8%] px-[1.5%] text-white font-semibold rounded-sm cursor-pointer">
              View more
            </button>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(/img/pro4.jpg)` }}
          className="bg-cover bg-center bg-no-repeat duration-700"
        >
          <div className="bg-black/75 h-70 flex flex-col justify-center items-center hover:bg-black/30 duration-300">
            <h1 className="text-white text-3xl font-semibold">Madrid</h1>
            <button className="mt-10 border py-[0.8%] px-[1.5%] text-white font-semibold rounded-sm cursor-pointer">
              View more
            </button>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(/img/pro5.jpg)` }}
          className="bg-cover bg-center bg-no-repeat duration-700"
        >
          <div className="bg-black/75 h-70 flex flex-col justify-center items-center hover:bg-black/30 duration-300">
            <h1 className="text-white text-3xl font-semibold">Barcelona</h1>
            <button className="mt-10 border py-[0.8%] px-[1.5%] text-white font-semibold rounded-sm cursor-pointer">
              View more
            </button>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(/img/pro6.jpg)` }}
          className="bg-cover bg-center bg-no-repeat duration-700"
        >
          <div className="bg-black/75 h-70 flex flex-col justify-center items-center hover:bg-black/30 duration-300">
            <h1 className="text-white text-3xl font-semibold">Trujillo</h1>
            <button className="mt-10 border py-[0.8%] px-[1.5%] text-white font-semibold rounded-sm cursor-pointer">
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
