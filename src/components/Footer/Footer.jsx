import "./Footer.css";
import Button from "../ui/Button/Button";

function Footer({ showGetInTouch = false }) {
  return (
    <footer className="footer">

      {showGetInTouch && (
        <div className="footer__get_in_touch">
          <h2>Ready to write your next great blog ?</h2>
          <p>Join 50,000+ writers using BlogCraft to publish smarter, faster, and with more impact.</p>
          <Button 
          variant="footer-cta"
          onClick={() => window.location.href = '/signup'}
          >
            Get in Touch
          </Button>
        </div>
      )}

      <div className="footer__inner">

        <div className="footer__brand">
          <h3 className="footer__brand-name">
            BlogCraft
          </h3>

          <p className="footer__brand-desc">
            We offer AI-powered blog generation for creators who want to
            write more, stress less, and reach readers who matter.
          </p>

          <div className="footer__socials">
            {["f", "𝕏", "in"].map((label) => (
              <div
                key={label}
                className="footer__social-btn"
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="footer__contact">
          <h4 className="footer__contact-title">
            Contact Us
          </h4>

          <p className="footer__contact-item">
            <span>✉</span>
            <span>support@blogcraft.ai</span>
          </p>

          <p className="footer__contact-item">
            <span>📞</span>
            <span>+1 (234) 567-8910</span>
          </p>

          <p className="footer__contact-item">
            <span>📍</span>
            <span>Singapore city, Singapore</span>
          </p>
        </div>

      </div>
      <div className="footer__bottom">
        BlogCraft © 2025 All rights reserved. · Terms of use · Privacy Policy
      </div>
    </footer>
  );
}

export default Footer;