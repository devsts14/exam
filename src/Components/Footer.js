import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">LOGO</div>
      <p className="footer_copyright">Copyright &copy; 2020.</p>
      <div className="footer_privacy">
        <span>Legal Stuff</span>
        <span className="divider"></span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
