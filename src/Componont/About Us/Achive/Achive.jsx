import React from "react";
import Background from "../../../assets/About Us/background.mp4";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import AchiveCard from "./AchiveCard/AchiveCard";

function Achive() {
  return (
    <>
      <div className="relative">
        <div className="sticky">
          <section>
            <div className="  flex   relative my-8  h-[100vh] -mt-36 mb-56  ">
              <div>
                <video autoPlay loop muted>
                  <source src={Background} type="video/mp4" />
                </video>
                <div>
                  <div className="absolute top-[25%] left-[11%]  w-[50%] h-[60%] flex flex-col justify-evenly videosection">
                    <p className="text-xl   sm:text-3xl lg:text-6xl text-richblack-5  ">
                      Big Dreams, Bigger Achievements
                    </p>

                    <p
                      className="text-sm hidden md:block  text-richblack-5 sm:text-lg"
                      style={{ fontSize: "1.1vw" }}
                    >
                      At EditQuasar, we propel forward with unstoppable energy,
                      delivering exceptional results that make a powerful
                      impact. We have no plans to slow down!
                    </p>
                  </div>
                  <div className="relative my-8  h-[100vh] -mt-36 mb-56  ">
                   
                    <AchiveCard />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Achive;
