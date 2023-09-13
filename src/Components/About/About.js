import React from "react";
import './About.css'
import Roya from '../Assets/Roya.jpg'
import {PiLinkedinLogoLight} from 'react-icons/pi'
import {BsGithub} from 'react-icons/bs'
const About = () => {
  return (
    <>
    <div className=" d-flex justify-content-around p-5 col-12">
    <div className="col-6">
    <img src={Roya} alt="Avatar" className="img animate__animated animate__heartBeat" />
    </div>
     <div className="col-6 pharagraf">
      <h2> Roya Rastegar</h2>
      <p> Front-End Developer</p>
      <hr className="line"></hr>
      <p className="apan" ><PiLinkedinLogoLight className="linkedin"/>: www.linkedin.com/in/roya-rastegar</p>
      <p className="apan" ><BsGithub className="linkedin"/>:  https://github.com/RoyaRastegar</p>

     </div>
    </div>
    </>
  );
};

export default About;
