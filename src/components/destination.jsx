import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import Europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import { useState } from "react";
import data from "../data.json";
import $ from "jquery";
import { Navbar } from "./navbar";

export function Destination() {
  const [destination, setdestination] = useState("moon");

  console.log(data.destinations);

  function handleMoon() {
    setdestination("moon");
    $(".moon").css("borderBottom", "4px solid white");
    $(".mars").css("borderBottom", "none");
    $(".europa").css("borderBottom", "none");
    $(".titan").css("borderBottom", "none");
  }

  function handleMars() {
    setdestination("mars");
    $(".mars").css("borderBottom", "4px solid white");
    $(".moon").css("borderBottom", "none");
    $(".europa").css("borderBottom", "none");
    $(".titan").css("borderBottom", "none");
  }

  function handleEuropa() {
    setdestination("europa");
    $(".europa").css("borderBottom", "4px solid white");
    $(".moon").css("borderBottom", "none");
    $(".mars").css("borderBottom", "none");
    $(".titan").css("borderBottom", "none");
  }

  function handleTitan() {
    setdestination("titan");
    $(".titan").css("borderBottom", "4px solid white");
    $(".moon").css("borderBottom", "none");
    $(".europa").css("borderBottom", "none");
    $(".mars").css("borderBottom", "none");
  }

  return (
    <div className="text-white bg-no-repeat bg-cover bg-[url('./assets/destination/background-destination-mobile.jpg')] sm:bg-[url('./assets/destination/background-destination-tablet.jpg')] lg:bg-[url('./assets/destination/background-destination-desktop.jpg')]">
      <Navbar />
      <div className="flex flex-col destination items-center">
        <div className="mt-12 flex flex-col items center pb-8 w-10/12">
          <h1 className="text-2xl lg:text-left uppercase">
            {" "}
            01 Pick your destination
          </h1>
          <div className="flex flex-col items-center lg:mt-16 lg:flex-row">
            <img
              className="w-10/12 mt-12"
              src={
                destination == "moon"
                  ? moon
                  : destination == "mars"
                  ? mars
                  : destination == "europa"
                  ? Europa
                  : destination == "titan"
                  ? titan
                  : null
              }
            />
            <div className="flex flex-col  lg:items-end">
              <div className=" md:text-left flex flex-col lg:-mr-12 lg:w-10/12">
                <div className="flex flex-col items-center">
                  <div className="flex flex-row justify-center md:justify-start lg:w-10/12 mt-12 trans">
                    <p
                      className="cursor-pointer pb-4 moon"
                      onClick={handleMoon}
                    >
                      MOON
                    </p>
                    <p
                      className="mx-4 cursor-pointer mars"
                      onClick={handleMars}
                    >
                      MARS
                    </p>
                    <p className="cursor-pointer europa" onClick={handleEuropa}>
                      EUROPA
                    </p>
                    <p
                      className="ml-4 cursor-pointer titan"
                      onClick={handleTitan}
                    >
                      TITAN
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className=" w-10/12">
                    <h1 className="uppercase mt-12 text-6xl lg:text-8xl">
                      {destination == "moon"
                        ? "moon"
                        : destination == "mars"
                        ? "mars"
                        : destination == "europa"
                        ? "Europa"
                        : destination == "titan"
                        ? "titan"
                        : null}
                    </h1>
                    <div className="flex flex-col items-center trans">
                      <p className="mt-12">
                        {destination == "moon"
                          ? data.destinations[0].description
                          : destination == "mars"
                          ? data.destinations[1].description
                          : destination == "europa"
                          ? data.destinations[2].description
                          : destination == "titan"
                          ? data.destinations[3].description
                          : null}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center w-full">
                  <div className="flex flex-row justify-center md:justify-start mt-12 avg w-10/12 pt-4">
                    <div className="mr-8 text-left">
                      <p className="uppercase trans"> avg.distance</p>
                      <p>
                        {destination == "moon"
                          ? data.destinations[0].distance
                          : destination == "mars"
                          ? data.destinations[1].distance
                          : destination == "europa"
                          ? data.destinations[2].distance
                          : destination == "titan"
                          ? data.destinations[3].distance
                          : null}
                      </p>
                    </div>
                    <div className="text-left">
                      <p className="uppercase trans">est travel time</p>
                      <p>
                        {destination == "moon"
                          ? data.destinations[0].travel
                          : destination == "mars"
                          ? data.destinations[1].travel
                          : destination == "europa"
                          ? data.destinations[2].travel
                          : destination == "titan"
                          ? data.destinations[3].travel
                          : null}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
