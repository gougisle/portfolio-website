import React from "react";
import SectionNeonHeader from "../components/SectionNeonHeader";
import MyStory from "../components/MyStory";

//<span className="neon-text"></span>
export default function AboutMeView() {
  return (
    <div className="container">
      <div className="view-main-header">
        About Me<span className="neon-text">.</span>
      </div>

      <div className="intro">
        My name is Lefeba Joseph Gougis III, a{" "}
        <span className="neon-text">Full Stack Developer</span> with a passion
        for <span className="neon-text">problem-solving</span>. My journey has
        taken me through a variety of industries and disciplines including
        Software, Psychology, Customer Service, Therapy, Education, Mindfulness
        and more. I have been blessed with a diverse set of experiences allowing
        me to develop
        <span className="neon-text"> well-rounded</span> perspectives on life,
        work, culture and relationships.
      </div>
      <div className="">
        <SectionNeonHeader title={"Education"} />
        <p>
          I embarked on my academic journey at{" "}
          <span className="neon-text">UC Santa Barbara</span> (UCSB), where I
          studied Economics, Biology and Psychology. Ultimately, I chose to
          Major in Psychology because of my interets in human behavior and the
          mysteries of consiousness; I recevied my BA in 2018. During my time at
          UCSB, I devopled multiple research studies looking into
          Social-Cognitive Developmental milestones in children, the benefits of
          Mindfulness on mental-emotional wellbeing and wrote a thesis on how
          young children conceptualize race/ethnicity. Outside of the classroom,
          I was Chapter President of{" "}
          <a
            href="https://www.medlifemovement.org/"
            target="_blank"
            rel="noreferrer"
          >
            MEDLIFE
          </a>{" "}
          at UCSB, Member/Recruitment Chair for Sigma Phi Epsilon fraternity and
          worked as a Behavioral Therapist.
        </p>
      </div>

      <div>
        {" "}
        <SectionNeonHeader title={"Professional Journey"} />
        <p>
          My professional narrative is a tapestry of roles that have shaped my
          expertise. Following graduation I began work as a Research Fellow with
          the{" "}
          <a href="https://www.cmhp.ucsb.edu/" target="_blank" rel="noreferrer">
            Center For Mindfulness and Human Potential (CMHP)
          </a>
          . Here I a played a critial role in the development and maintanance of
          a Minfulness Education App –{" "}
          <a
            href="https://www.findingfocus.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Finding Focus
          </a>
          . My contributions to this project included QA testing, video/audio
          production and research design. This is where I developed my intial
          interest in software sevelpment. Following the fellowship with CMHP, I
          spent multiple years working as a Behavioral Therapist learning
          invaluable lessons about human compassion, trauma and mental illness.
          In my off time I became a certified Mindfulness teacher and began
          guiding private, 1-on-1 meditaion sessions with young professional,
          and executives. All the while, I was inspired to start independently
          learning how to code while I continued work as a therapist and
          mindfulness teacher. Then COVID happened... Amidst the challenges
          posed by the COVID-19 pandemic, I used the opportunity to hone this
          new skill in software development. And after just a few months
          training I started my first official job as a Full Stack Developer
          with Sabio, Inc. Here I gained a wealth of knowledge about database
          architecture, backend development, frontend UI/UX design, product
          management and much more.
        </p>
      </div>

      <div className="row">
        {" "}
        <SectionNeonHeader title={"Interests"} />
      </div>
    </div>
  );
}
