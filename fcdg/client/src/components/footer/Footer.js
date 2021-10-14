import React from "react";
import { SocialIcon } from "react-social-icons";

//stylesheet
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <h>Footer text</h>
    <br />
    <br />
    <SocialIcon url="https://www.facebook.com" fgColor="white" />
    <SocialIcon url="https://twitter.com" fgColor="white" />
    <SocialIcon url="https://www.discord.com" fgColor="white" />
    <SocialIcon url="https://www.instagram.com" fgColor="white" />
    <SocialIcon url="https://www.snapchat.com" fgColor="white" />
    <SocialIcon url="https://www.youtube.com" fgColor="white" />
    <br />
    <br />
    <p className="p">
      Copyright 2021. All content, trademarks, artwork, and associated imagery
      are trademarks and/or copyright material of their respective owners. All
      rights reserved.
      <br />
      <p1 className="p1">
        Website Created by:{" "}
        <a className="p1" href="https://www.facebook.com/darien.st">
          Darien Stefani
        </a>{" "}
        and{" "}
        <a className="p1" href="https://google.com">
          Tyler Gillette
        </a>
      </p1>
    </p>
  </div>
);
export default Footer;
