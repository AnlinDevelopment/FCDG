import React from "react";
import { SocialIcon } from "react-social-icons";

//stylesheet
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    {/* <label>Footer text</label> */}
    <br />
    <br />

    {/* Socials */}
    <SocialIcon
      url="https://www.facebook.com"
      fgColor="white"
      target="_blank"
    />
    <SocialIcon url="https://twitter.com" fgColor="white" target="_blank" />
    <SocialIcon url="https://www.discord.com" fgColor="white" target="_blank" />
    <SocialIcon
      url="https://www.instagram.com"
      fgColor="white"
      target="_blank"
    />
    <SocialIcon
      url="https://www.snapchat.com"
      fgColor="white"
      target="_blank"
    />
    <SocialIcon url="https://www.youtube.com" fgColor="white" target="_blank" />
    <br />
    <br />
    <p className="p">
      Copyright {new Date().getFullYear()}. All content, trademarks, artwork,
      and associated imagery are trademarks and/or copyright material of their
      respective owners. All rights reserved.
      <br />
      {/* Credit */}
      <label className="p1">
        Created by:{" "}
        <a
          className="p1"
          target="_blank"
          rel="noreferrer"
          href="https://www.darien.biz"
        >
          Darien Stefani
        </a>{" "}
        and{" "}
        <a
          className="p1"
          target="_blank"
          rel="noreferrer"
          href="https://google.com"
        >
          Tyler Gillette
        </a>
      </label>
    </p>
  </div>
);
export default Footer;
