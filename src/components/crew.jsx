import React from "react";
import { Navbar } from "./navbar";
import { useRef, useEffect, useState } from "react";
import data from "../data.json";
import hurley from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import ansari from "../assets/crew/image-anousheh-ansari.png";
import $ from "jquery";

export function Crew() {
  const [crew, setcrew] = useState("douglas");

  function handleDouglas() {
    setcrew("douglas");
    $(".douglas").css("backgroundColor", "white");
    $(".douglas").css("color", "black");
    $(".victor").css("backgroundColor", "transparent");
    $(".victor").css("color", "white");
    $(".mark").css("backgroundColor", "transparent");
    $(".mark").css("color", "white");
    $(".ansari").css("backgroundColor", "transparent");
    $(".ansari").css("color", "white");
  }

  function handleMark() {
    setcrew("mark");
    $(".mark").css("backgroundColor", "white");
    $(".mark").css("color", "black");
    $(".victor").css("backgroundColor", "transparent");
    $(".victor").css("color", "white");
    $(".douglas").css("backgroundColor", "transparent");
    $(".douglas").css("color", "white");
    $(".ansari").css("backgroundColor", "transparent");
    $(".ansari").css("color", "white");
  }

  function handleVictor() {
    setcrew("victor");
    $(".victor").css("backgroundColor", "white");
    $(".victor").css("color", "black");
    $(".douglas").css("backgroundColor", "transparent");
    $(".douglas").css("color", "white");
    $(".mark").css("backgroundColor", "transparent");
    $(".mark").css("color", "white");
    $(".ansari").css("backgroundColor", "transparent");
    $(".ansari").css("color", "white");
  }

  function handleAnsari() {
    setcrew("ansari");
    $(".ansari").css("backgroundColor", "white");
    $(".ansari").css("color", "black");
    $(".victor").css("backgroundColor", "transparent");
    $(".victor").css("color", "white");
    $(".mark").css("backgroundColor", "transparent");
    $(".mark").css("color", "white");
    $(".douglas").css("backgroundColor", "transparent");
    $(".douglas").css("color", "white");
  }

  return (
    <div className="overflow-x-hidden crew bg-no-repeat bg-cover lg:contain bg-[url('./assets/crew/background-crew-mobile.jpg')] sm:bg-[url('./assets/crew/background-crew-tablet.jpg')] lg:bg-[url('./assets/crew/background-crew-desktop.jpg')] text-white">
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="lg:text-left w-10/12">
          <h2 className="text-2xl">02 MEET YOUR CREW</h2>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10/12 flex flex-col lg:flex-row-reverse mt-8">
          <img
            src={
              crew == "douglas"
                ? hurley
                : crew == "mark"
                ? mark
                : crew == "victor"
                ? victor
                : crew == "ansari"
                ? ansari
                : null
            }
            alt="crew member"
            className="lg:w-9/12"
          />
          <div className="lg:text-left lg:w-full lg:pt-24">
            <h2 className="text-2xl mt-4 trans lg:text-4xl">
              {crew == "douglas"
                ? data.crew[0].role
                : crew == "mark"
                ? data.crew[1].role
                : crew == "victor"
                ? data.crew[2].role
                : crew == "ansari"
                ? data.crew[3].role
                : null}
            </h2>
            <h1 className="text-4xl mt-2 lg:text-6xl">
              {crew == "douglas"
                ? data.crew[0].name
                : crew == "mark"
                ? data.crew[1].name
                : crew == "victor"
                ? data.crew[2].name
                : crew == "ansari"
                ? data.crew[3].name
                : null}
            </h1>
          <div className="flex flex-col items-center lg:items-start">
          <p className="mt-8 max-w-md trans">
              {crew == "douglas"
                ? data.crew[0].bio
                : crew == "mark"
                ? data.crew[1].bio
                : crew == "victor"
                ? data.crew[2].bio
                : crew == "ansari"
                ? data.crew[3].bio
                : null}
            </p>
          </div>
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex mt-12 mb-8">
                <p
                  className="border bg-white text-black lg:my-8 my-2 px-4 lg:px-6 lg:py-4 py-2 rounded-full cursor-pointer douglas"
                  onClick={handleDouglas}
                >
                  1
                </p>
                <p
                  className="mx-8 border lg:my-8 my-2 px-4 lg:px-6 lg:py-4 py-2 rounded-full cursor-pointer mark"
                  onClick={handleMark}
                >
                  2
                </p>
                <p
                  className="border lg:my-8 px-4 my-2 lg:px-6 lg:py-4 py-2 rounded-full cursor-pointer victor"
                  onClick={handleVictor}
                >
                  3
                </p>
                <p
                  className="ml-8 border lg:my-8 my-2 px-4 lg:px-6 lg:py-4 py-2 rounded-full cursor-pointer ansari"
                  onClick={handleAnsari}
                >
                  4
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
