import React from "react";
import Image from "next/image";
import { aboutSectionData, careerSectionData } from "../lib/data";

const AboutSection = () => {
  return (
    <section id="about" className="s-about target-section">
      <div className="s-about__section s-about__section--profile">
        <div className="right-vert-line"></div>

        <div className="row">
          <div className="column large-6 medium-8 tab-full">
            <div className="section-intro" data-num="01" data-aos="fade-up">
              <h3 className="subhead">About Me</h3>
              <h1 className="display-1">{aboutSectionData.intro}</h1>
            </div>

            <div className="profile-pic" data-aos="fade-up">
              <div className="w-full aspect-[305/402] relative">
                <Image src={aboutSectionData.imgUrl} fill alt="Profile Pic" />
              </div>
            </div>

            <h3 data-aos="fade-up">Profile</h3>

            <p data-aos="fade-up">{aboutSectionData.about}</p>
          </div>
        </div>
      </div>

      <div className="s-about__section">
        <div className="row">
          <div className="column">
            <h3 data-aos="fade-up">Career</h3>
          </div>
        </div>

        <div className="row block-large-1-2 block-900-full work-positions">
          {careerSectionData.map((carreer, index) => (
            <div key={index} className="column" data-aos="fade-up">
              <div className="position">
                <div className="position__header">
                  <h6>
                    <span className="position__co">{carreer.company}</span>
                    <span className="position__pos">{carreer.role}</span>
                  </h6>
                  <div className="position__timeframe">{carreer.date}</div>
                </div>
                <p>{carreer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
