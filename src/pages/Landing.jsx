import React from "react";
import Typical from "react-typical";
export const Landing = () => (
  <section className="landing">
    <Typical
      steps={[
        `Hello!`,
        4250,
        "Welcome to thurston.dev - my name is Matt.",
        2000,
        "My skills?",
        2000,
        ".NET",
        200,
        "JavaScript",
        200,
        "React",
        200,
        "Angular",
        300,
        "Azure and AWS",
        300,
        "Pixel Perfect User Interfaces!",
        300,
        "Thank you for your interest!",
        3500,
      ]}
      loop={Infinity}
      wrapper="h1"
    />
  </section>
);
