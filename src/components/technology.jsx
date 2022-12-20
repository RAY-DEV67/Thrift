import launchmobile from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";
import capsule from "../assets/technology/image-space-capsule-portrait.jpg";
import { useState } from "react";
import data from "../data.json";
import { Navbar } from "./navbar";
import $ from "jquery";

export function Technology() {
  const [technology, settechnology] = useState("launch");

  function handleLaunch() {
    settechnology("launch");
    $(".launch").css("backgroundColor", "white");
    $(".launch").css("color", "black");
    $(".spaceport").css("backgroundColor", "transparent");
    $(".spaceport").css("color", "white");
    $(".capsule").css("backgroundColor", "transparent");
    $(".capsule").css("color", "white");
  }

  function handleSpaceport() {
    settechnology("spacemobile");
    $(".spaceport").css("backgroundColor", "white");
    $(".spaceport").css("color", "black");
    $(".launch").css("backgroundColor", "transparent");
    $(".launch").css("color", "white");
    $(".capsule").css("backgroundColor", "transparent");
    $(".capsule").css("color", "white");
  }

  function handleCapsule() {
    settechnology("capsule");
    $(".capsule").css("backgroundColor", "white");
    $(".capsule").css("color", "black");
    $(".spaceport").css("backgroundColor", "transparent");
    $(".spaceport").css("color", "white");
    $(".launch").css("backgroundColor", "transparent");
    $(".launch").css("color", "white");
  }

  return (
    <div className="text-white bg-no-repeat bg-cover pb-8 bg-[url('./assets/technology/background-technology-mobile.jpg')] sm:bg-[url('./assets/technology/background-technology-tablet.jpg')] lg:bg-[url('./assets/technology/background-technology-desktop.jpg')]">
      <Navbar />
      <div className="flex flex-col items-center technology ">
        <div className="lg:w-full">
          <div className="flex flex-col items-center">
            <h1 className="mt-12 lg:w-10/12 lg:text-left text-xl">
              {" "}
              03 Space launch 101
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10/12 lg:w-full mt-12 flex flex-col lg:flex-row-reverse">
              {/* <div className="flex flex-col items-center"> */}
              <img
                src={
                  technology == "launch"
                    ? launchmobile
                    : technology == "spacemobile"
                    ? spaceport
                    : technology == "capsule"
                    ? capsule
                    : null
                }
                className="techimg lg:w-"
              />
              {/* </div> */}
              <div className="flex flex-col mt-8 lg:flex-row lg:-mr-64 lg:w-9/12">
                <div className="flex justify-center lg:flex-col lg:items-center ">
                  <p
                    className="border bg-white text-black px-4 lg:px-6 lg:py-4 py-2 rounded-full cursor-pointer launch"
                    onClick={handleLaunch}
                  >
                    1
                  </p>
                  <p
                    className="mx-8 border lg:my-8 px-4 lg:px-6 lg:py-4 py-2 rounded-full cursor-pointer spaceport"
                    onClick={handleSpaceport}
                  >
                    2
                  </p>
                  <p
                    className="px-4 py-2 rounded-full lg:px-6 lg:py-4 border cursor-pointer capsule"
                    onClick={handleCapsule}
                  >
                    3
                  </p>
                </div>
                <div className=" lg:pt-24 lg:text-left lg:w-6/12">
                  <p className="uppercase mt-8 trans"> The terminology...</p>
                  <p className="mt-4 text-4xl lg:text-6xl">
                    {technology == "launch"
                      ? data.technology[0].name
                      : technology == "spacemobile"
                      ? data.technology[1].name
                      : technology == "capsule"
                      ? data.technology[2].name
                      : null}
                  </p>
                  <p className="mt-8 trans">
                    {technology == "launch"
                      ? data.technology[0].description
                      : technology == "spacemobile"
                      ? data.technology[1].description
                      : technology == "capsule"
                      ? data.technology[2].description
                      : null}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
