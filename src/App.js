import picture from "./img/picture.png";
import illustrator from "./img/adobe-illustrator.svg";
import photoshop from "./img/adobe-photoshop.svg";
import blender from "./img/blender.svg";
import bootstrap from "./img/bootstrap-4.svg";
import css from "./img/css.svg";
import firebase from "./img/google-firebase.svg";
import html from "./img/html.svg";
import js from "./img/javascript-programming-language.svg";
import java from "./img/java-programming-language.svg";
import jquery from "./img/jquery.svg";
import ubuntu from "./img/linux-ubuntu.svg";
import phone from "./img/llamada-telefonica.svg";
import php from "./img/php-programming-language.svg";
import email from "./img/sobre.svg";
import gmail from "./img/gmail-svgrepo-com.svg";
import sql from "./img/sql.svg";
import three from "./img/Three.js_Icon.svg";
import react from "./img/react-js-icon.svg";
import ionic from "./img/ionic-icon.svg";
import mongo from "./img/mongodb-icon.svg";
import windows from "./img/windows-svgrepo-com.svg";
import flutter from "./img/flutter.svg";
import github from "./img/github-svgrepo-com.svg";
import mysql from "./img/mysql.svg";
/**React */
import { useEffect, useRef } from "react";
/**React */

/*Framer Motion */

import { motion, useAnimationControls } from "framer-motion";

/*Framer Motion */


import { useInView } from "framer-motion";

/*Framer Motion */
import "./App.css";
import Granim from "react-granim";

function App() {
  /*Hooks*/

  const refText = useRef(null);
  const refTech = useRef(null);

  const isInViewText = useInView(refText, { once: true });
  const isInViewTech = useInView(refTech, { once: true });

  /*Hooks*/

  /**Frame Motion */

  const firstSur = useAnimationControls();
  const secondSur = useAnimationControls();
  const switchOpacity = useAnimationControls();

  async function textSequence() {
    await firstSur.start({
      top: 140,
      right: 140,
      transition: {
        delay: 3,
        duration: 0.3,
        type: "ease-out",
      },
    });
    await secondSur.start({
      top: 280,
      right: 220,
      transition: {
        duration: 0.4,
        type: "ease-out",
      },
    });
    await switchOpacity.start({
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 1.4,
      },
    });

    firstSur.start({
      top: 240,
      right: 130,
      transition: {
        duration: 0.4,
        type: "ease-out",
      },
    });

    secondSur.start({
      top: 110,
      right: 220,
      transition: {
        duration: 0.3,
        type: "ease-out",
      },
    });
  }

  const tech = useAnimationControls();
  const front = useAnimationControls();
  const back = useAnimationControls();
  const extra = useAnimationControls();

  async function techSequence() {
    
  }

  useEffect(() => {
    textSequence();
    techSequence();
  }, []);
  /**Frame Motion */

  return (
    <>
      <div id="black-div-start" ref={refText}>
        <div
          id="gerroar-container"
          style={{
            opacity: isInViewText ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          }}
          animate={switchOpacity}
        >
          <div id="name">
            <div id="ger">Ger</div>
            <motion.div id="man" animate={switchOpacity}>
              mán
            </motion.div>
          </div>
          <motion.div id="first-sur" animate={firstSur}>
            <div id="ro">Ro</div>
            <motion.div id="driguez" animate={switchOpacity}>
              dríguez
            </motion.div>
          </motion.div>
          <motion.div id="second-sur" animate={secondSur}>
            <div id="ar">Ar</div>
            <motion.div id="ias" animate={switchOpacity}>
              ias
            </motion.div>
          </motion.div>
        </div>
        <img src={picture} alt="profile_picture" id="picture" />
        <div id="description">
          Web developer in continuous growth with great interest in BackEnd
          development, great passion for FrontEnd development and always curious
          about new technologies, currently with a higher degree in Web
          Application Development studied in Spain, having done an internship at
          Indra, Spanish multinational that offers consulting services in
          transport, defense, energy, telecommunications, financial services, as
          well as services to the public sector, currently studying the Top-Up
          in Web Development at Business Academy Aarhus to learn new
          technologies and methodologies and improve the ones I already had.
        </div>
        <motion.div id="tech" ref={refTech} animate={tech}>
          <p>Technologies</p>
          <div id="frontend">
            <p>FrontEnd</p>
            <div className="gridContent">
              <img src={html} alt="html" className="icons" />
              <img src={js} alt="js" className="icons" />
              <img src={css} alt="css" className="icons" />
              <img src={bootstrap} alt="bootstrap" className="icons" />
              <img src={jquery} alt="jquery" className="icons" />
              <img src={three} alt="three" className="icons" />
              <div id="react">
                <img src={react} alt="react" className="icons" />
                <p>+</p>
                <p>Native</p>
              </div>
              <img src={ionic} alt="ionic" className="icons" />
              <img src={flutter} alt="iflutter" className="icons" />
            </div>
          </div>
          <div id="backend">
            <p>BackEnd</p>
            <div className="gridContent">
              <img src={php} alt="php" className="icons" />
              <img src={sql} alt="sql" className="icons" />
              <img src={mysql} alt="mysql" className="icons" />
              <img src={firebase} alt="firebase" className="icons" />
              <img src={mongo} alt="mongo" className="icons" />
            </div>
          </div>
          <div id="extra">
            <p>Extra</p>
            <div className="gridContent">
              <img src={illustrator} alt="illustrator" className="icons" />
              <img src={photoshop} alt="photoshop" className="icons" />
              <img src={blender} alt="blender" className="icons" />
              <img src={java} alt="java" className="icons" />
              <img src={windows} alt="windows" className="icons" />
              <img src={ubuntu} alt="ubuntu" className="icons" />
              <img src={github} alt="github" className="icons" />
            </div>
          </div>
        </motion.div>
        <div className="contact" id="email">
          <img src={email} alt="" className="contactIcons" />
          <p className="contactTxt">eaagar@students.eaaa.dk</p>
        </div>
        <div className="contact" id="gmail">
          <img src={gmail} alt="" className="contactIcons" />
          <p className="contactTxt">germanariasrodriguez@gmail.com</p>
        </div>
        <div className="contact" id="phone">
          <img src={phone} alt="" className="contactIcons" />
          <p className="contactTxt">42206403</p>
        </div>
        <div className="contact" id="git">
          <img src={github} alt="" className="contactIcons" />
          <p className="contactTxt">Gerroar</p>
        </div>
      </div>
      <div className="wave"></div>
    </>
  );
}

export default App;
