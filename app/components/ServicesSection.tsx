import React from "react";
import { expertiseSectionData } from "../lib/data";

const ServicesSection = () => {
  return (
    <section id="services" className="s-services target-section h-dark-bg">
      <div className="row s-services__content">
        <div className="vert-line"></div>

        <div className="column large-6 s-services__leftcol">
          <div className="section-intro" data-num="02" data-aos="fade-up">
            <h3 className="subhead">Expertise</h3>

            <h1 className="display-1">{expertiseSectionData.intro}</h1>
          </div>

          <p className="lead" data-aos="fade-up">
            {expertiseSectionData.description}
          </p>
        </div>

        <div className="column large-6">
          <ul className="services-list" data-aos="fade-up">
            {expertiseSectionData.skills.map((skill, index) => (
              <li
                key={index}
                className={`services-list__item ${
                  index === 0 ? `is-active` : ``
                }`}
              >
                <div className="services-list__item-header">
                  <h5>{skill.name}</h5>
                </div>
                <div className="services-list__item-body">
                  <p>{skill.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
