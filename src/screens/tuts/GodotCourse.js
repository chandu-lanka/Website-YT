import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";

const GodotCourse = () => {
  useEffect(() => {
    document.title = "Godot Course is currently unavailable sorry";
  }, []);
  return (
    <div>
      <Navbar />
      <h1
        style={{
          color: "white",
          fontFamily: "pixel",
          textAlign: "center",
          fontSize: 60,
        }}
      >
        Sorry this tutorial is not available right now
      </h1>
      <span
        style={{
          color: "white",
          fontFamily: "pixel",
          marginLeft: "40%",
          fontSize: 30,
        }}
      >
        will come soon though😊
      </span>
    </div>
  );
};

export default GodotCourse;
