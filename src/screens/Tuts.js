import React, { useEffect } from "react";
import Card from "../components/TutCard";
import Navbar from "../components/Navbar";
import "./styles/Tuts.css";
import ChooseYourEngine from "../imgs/Choose Your Engine.svg";
import GodotUI from "../imgs/Godot-UI.svg";
import GodotCourse from "../imgs/Godot Course.svg";
import Footer from "../components/Footer copy";

const Tuts = () => {
  useEffect(() => {
    document.title = "Tut's On Game Dev";
  }, []);

  return (
    <div className="tuts">
      <Navbar />
      <h1 className="header-tut">Tut's On Game Dev</h1>
      <div className="tut-container">
        <Card
          tut_img={ChooseYourEngine}
          desc="Hey guys, in this tutorial I help you find your Game Engine(I give you suggestions on what game engine you use),I give you scenario's on what your current situation might be for example you might not be from a coding background and want to make games, etc, etc."
          tut_to="/tuts/choose-your-game-engine"
          button_text="Check Out Tut"
        />
        <Card
          tut_img={GodotUI}
          desc="Hey guys, in this tutorial I help you get familiar with the Godot's UI(User Interface) and help you out with how it looks and the buttons, and other stuff. I might as well make a video on this topic so stay tuned by subscribing to my channel The Orange Triangle and join the discord"
          tut_to="/tuts/godot-ui-tut"
          button_text="Check Out Tut"
        />
        <Card
          tut_img={GodotCourse}
          desc="Hey guys, in this tutorial series I will teach the basics on The Godot Game Engine and all it's fundamentals, you will learn about it's scene system and how to reuse a scene without making the entire thing again and GdScript Godot's custom programming language similar to the Python Programming Language"
          tut_to="/tuts/godot-course"
          button_text="Check Out Tut"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Tuts;
