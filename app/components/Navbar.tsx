import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="s-header">
      <div className="header-logo">
        <a href="#">
          <Image src="/images/logo.svg" width={37} height={40} alt="Homepage" />
        </a>
      </div>

      <div className="header-content">
        <nav className="row header-nav-wrap">
          <ul className="header-nav">
            <li>
              <a className="smoothscroll" href="#hero" title="Intro">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about" title="About">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#services" title="Services">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" title="Contact us">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="/CV.pdf"
          target="_blank"
          className="btn btn--stroke btn--small"
        >
          Download CV
        </a>
      </div>

      <a className="header-menu-toggle" href="#0">
        <span>Menu</span>
      </a>
    </header>
  );
};

export default Navbar;
