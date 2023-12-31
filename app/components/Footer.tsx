import React from "react";
import { contactData } from "../lib/data";

const Footer = () => {
  return (
    <footer id="contact" className="s-footer h-dark-bg">
      <div className="right-vert-line"></div>

      <div className="row s-footer__main">
        <div className="column large-6">
          <div className="section-intro" data-aos="fade-up">
            <h3 className="subhead">Get In Touch</h3>

            <h1 className="display-1">{contactData.footerText}</h1>
          </div>

          <div className="footer-email-us">
            <a href="mailto:#0" className="btn btn--primary h-full-width">
              Let&apos;s Talk
            </a>
          </div>
        </div>

        <div className="column large-5">
          <div className="footer-contacts">
            <div className="footer-contact-block" data-aos="fade-up">
              <h5 className="footer-contact-block__header">Email</h5>
              <p className="footer-contact-block__content">
                <a href="mailto:#0">{contactData.email}</a>
              </p>
            </div>
            <div className="footer-contact-block" data-aos="fade-up">
              <h5 className="footer-contact-block__header">Phone</h5>
              <p className="footer-contact-block__content">
                <a href="tel:+1975432345">{contactData.phoneNumber}</a>
              </p>
            </div>
            <br />
            <div className="footer-contact-block" data-aos="fade-up">
              <h5 className="footer-contact-block__header">Social</h5>
              <ul className="footer-contact-block__list">
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
        </div>
      </div>

      <div className="row s-footer__bottom">
        <div className="column large-full ss-copyright">
          <span>
            Design by <a href="https://www.styleshout.com/">StyleShout</a>
          </span>
          <span>
            Development by{" "}
            <a href="https://sohybmansour.vercel.app/" target="_blank">
              Sohyb Mansour
            </a>
          </span>
        </div>

        <div className="ss-go-top">
          <a className="smoothscroll" title="Back to Top" href="#top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0l8 9h-6v15h-4v-15h-6z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
