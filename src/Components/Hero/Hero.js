import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-add">
          <motion.div
            initial={{ left: mobile ? "168px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>

          <span>The best fitness cub in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text ">Shape </span>
            <span>Your </span>
          </div>
          <div>
            <span>Ideal Body </span>
          </div>
          <div>
            <span>
              IN HERE WE WIL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND
              LIVE UP YOUR LIFE TO FULLEST
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={900} delay="4" preFix="+" />
            </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={10} delay="4" preFix="+" />
            </span>
            <span>Fitness Programes</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart}></img>
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="" className="hero-image"></img>
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        ></motion.img>

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt=""></img>
          <div>
            <span>Calories burned</span>
            <span>20Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
