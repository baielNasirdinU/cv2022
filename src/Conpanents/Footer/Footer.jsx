import React from "react";
import "./footer.scss";
function Footer() {
  const data = new Date();
  return (
    <>
      <footer className="footer">
        <div className="container footer__container">
          <p className="footer__link">
            Baiel Nasirdin uulu.react js &copy; {data.getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
