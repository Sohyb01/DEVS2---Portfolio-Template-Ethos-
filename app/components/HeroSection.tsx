import React from "react";
import { contactData, introText } from "../lib/data";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="s-hero target-section"
      data-parallax="scroll"
      data-image-src="images/hero-bg-3000.jpg"
      data-natural-width={3000}
      data-natural-height={2000}
      data-position-y="center"
    >
      <div className="row hero-content">
        <div className="column large-full">
          <h1 className="max-w-[20ch]">
            {introText} Lorem ipsum dolor sit amet, consectetur adipisicing
          </h1>

          <ul className="hero-social">
            {contactData.socialMediaLinks.map(
              (social, index) =>
                social.url && (
                  <li key={index}>
                    <a href={social.url} title="">
                      {social.text}
                    </a>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>

      <div className="hero-scroll">
        <a href="#about" className="scroll-link smoothscroll">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 24l-8-9h6v-15h4v15h6z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
