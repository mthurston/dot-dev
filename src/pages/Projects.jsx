import React from "react";
import {
  DescriptionList,
  DescriptionListDefinition,
  DescriptionListTitle,
} from "../components/";

export const Projects = () => {
  return (
    <section class="projects">
      <div className="projects__content">
        <h2>Personal Projects</h2>
        <DescriptionList role="list">
          <DescriptionListTitle>Advent of Code</DescriptionListTitle>
          <DescriptionListDefinition>
            Advent of Code is an Advent calendar of small programming puzzles
            for a variety of skill sets and skill levels that can be solved in
            any programming language you like. People use them as a speed
            contest, interview prep, company training, university coursework,
            practice problems, or to challenge each other.
          </DescriptionListDefinition>
          <DescriptionListTitle>
            OpenAI and Codex Evaluation
          </DescriptionListTitle>
          <DescriptionListDefinition>
            Using Artificial Intelligence and Machine Learning, we are able to
            evaluate the performance of a given model on a given dataset.
            Regarding the development of software, specifically the art of
            creating source code, OpenAI and Codex provide a great resource for
            anyone interested in using AI to generate source code. On initial
            development, I was able to quickly craft several JavaScript classes
            for Advent of Code challenges. One caveat however is that most of
            the algorithms contained bugs and could not complete the challenge
            without several revisions.
          </DescriptionListDefinition>
          <DescriptionListTitle>
            UnityAR - AR UI/UX experimentation for Field Force Applications
            utilizing Near Field Communication and IoT
          </DescriptionListTitle>
          <DescriptionListDefinition>
            While trivial in use case there are several opportunities to
            leverage IoT and NFC in field services work or even in a retail or
            hospitality setting. One barrier to entry observed from my personal
            travels are that end users tend to feel overencumbered and not able
            to take advantage of the technology for an extended amount of time.
          </DescriptionListDefinition>
          <DescriptionListTitle>
            Dad-Ops.com - A website to gamify keeping track of daily tasks
          </DescriptionListTitle>
          <DescriptionListDefinition>
            Intended to PoC Unity WebGL output in addition to iOS and Android
            deployment targets. This is on hold for now.
          </DescriptionListDefinition>
        </DescriptionList>
      </div>
    </section>
  );
};
