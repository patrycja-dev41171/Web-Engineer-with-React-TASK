import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="footer__lists">
        <ul className="footer__lists__list">
          <h4>Products</h4>
          <li onClick={() => navigate("#")}>Tiramisu chocolate</li>
          <li onClick={() => navigate("#")}>Pastry tart</li>
          <li onClick={() => navigate("#")}>Pllipop brownie</li>
        </ul>
        <ul className="footer__lists__list">
          <h4>Collaboration</h4>
          <li onClick={() => navigate("#")}>Tiramisu chocolate</li>
          <li onClick={() => navigate("#")}>Pastry tart</li>
          <li onClick={() => navigate("#")}>Pllipop brownie</li>
        </ul>
      </div>
      <div className="footer__social">
        <img
          src="/assets/icon-fb.svg"
          alt="Link to facebook"
          onClick={() => navigate("#")}
        />
        <img
          src="/assets/icon-twitter.svg"
          alt="Link to twitter"
          onClick={() => navigate("#")}
        />
        <img
          src="/assets/icon-linkedin.svg"
          alt="Link to linkedin"
          onClick={() => navigate("#")}
        />
        <img
          src="/assets/icon-m.svg"
          alt="Link to e-mail"
          onClick={() => navigate("#")}
        />
        <img
          src="/assets/icon-git.svg"
          alt="Link to github"
          onClick={() => navigate("#")}
        />
      </div>
      <div className="footer__hr"></div>
      <div className="footer__info">
        <p className="footer__info__first">
          © 2003 - 2022 Carrot cake sweet pie Sp. z o.o. All rights reserved.
        </p>
        <p className="footer__info__second" onClick={() => navigate("#")}>
          Legal
        </p>
        <p className="footer__info__third" onClick={() => navigate("#")}>
          Privacy policy
        </p>
        <p className="footer__info__fourth">Proud to be Open Source</p>
      </div>
    </>
  );
};
