import { Navbar } from "./navbar";
import $ from "jquery";

export function Home() {
  function handleOpenNav() {
    $(".navBar").css("backgroundColor", "hsla(0, 0%, 100%,30%)");
  }

  return (
    <div className='bg-[url("./assets/home/background-home-mobile.jpg")] sm:bg-[url("./assets/home/background-home-tablet.jpg")] sm:bg-[url("./assets/home/background-home-desktop.jpg")] text-white bg-no-repeat bg-cover'>
      <Navbar />
      <div className="flex flex-col items-center  home">
        <div className="w-9/12 mt-12 md:flex md:justify-between md:items-center md:mt-56">
          <div className=" md:text-left">
            <p className="text-xl md:text-3xl trans">
              {" "}
              So, you want to travel to
            </p>
            <h1 className="text-5xl md:text-7xl text-white tracking-wider uppercase mt-4">
              Space
            </h1>
            <div className="flex flex-col items-center">
              <p className="text-sm md:text-md mt-8 max-w-md trans">
                {" "}
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p
              onClick={handleOpenNav}
              className="explore bg-white text-black cursor-pointer w-52 rounded-full h-52 flex flex-col items-center justify-center mt-16 mb-2 uppercase text-2xl"
            >
              Explore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
