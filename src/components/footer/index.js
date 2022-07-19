import React from "react";
import "./style.css";
import Logo from "../static/Logo.svg";
import { motion } from "framer-motion";
import Avatar from "../avatarMain";

const Footer = ({ index }) => {
  return (
    <div>
      <motion.div
        className="footerContainer"
        initial={{ y: +100 }}
        animate={{ y: 0 }}
      >
        {/* <img className = "logo" src = {Logo} alt = "Vegh Logo"/> */}
        <p className="logo">QuickShare</p>
        <div className="linkContainer">
          {/* <p className = "about"><a href = "https://veghfile.github.io">About</a><span> |</span></p>
                <p className = "tos"><a href = "https://veghfile.github.io/tos">Terms of Service</a><span> |</span></p>
                <p className = "privacy"><a href = "https://veghfile.github.io/privacy">Privacy</a></p> */}
          <p className="copyright">2022 All Right Reserved</p>
        </div>
        {/* <div className="userInfo">
          <Avatar index={index}>
            <p>You</p>
          </Avatar>
        </div> */}
      </motion.div>
    </div>
  );
};

export default Footer;
