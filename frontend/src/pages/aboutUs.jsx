import Footer from "../components/Footer";
import "./aboutUs.css";
import {
FaFacebookF,
FaInstagram
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";


function AboutUs() {

const [team,setTeam]=useState([]);

useEffect(()=>{

axios.get("http://localhost:5000/api/team")
.then((res)=>{
setTeam(res.data);
});

},[]);


  return (
    <>
      <div className="about-container">
        <div className="about-header">
          <span>About Us</span>
          <h1>What We Do</h1>

          <p>
            This is an example of a Moodle page resource. It can be used for
            static content pages. The Text editor allows the page to display
            many different kinds of content such as plain text, images, audio,
            video, embedded code or a combination of all these.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h2>We take learning to new heights</h2>

            <p>
              You can introduce your site and your teachers here. Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua.
            </p>

            <p>
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>

          <div className="about-image">
            <img
                src="https://lambda-demo-01.redpithemes.com/pluginfile.php/140/mod_page/content/13/about-us-01.jpg?time=1700398081103"
                alt="About Us"
            />
            </div>
        </div>

        <div className="team-section">

        <div className="team-heading">

        <span>ABOUT US</span>

        <h1>Who We Are</h1>

        <p>
        You can introduce your site and your teachers here.
        </p>

        </div>

        {
        team.map((item)=>(
        <div className="team-card" key={item.id}>

        <div className="team-image">

        <img
        src={item.image}
        alt={item.name}
        />

        </div>

        <div className="team-info">

        <h2>{item.name}</h2>

        <h4>{item.designation}</h4>

        <p>{item.description}</p>

        <div className="team-social">

        <a
        href={item.facebook}
        target="_blank"
        rel="noreferrer"
        >

        <FaFacebookF/>

        </a>

        <a
        href={item.instagram}
        target="_blank"
        rel="noreferrer"
        >

        <FaInstagram/>

        </a>

        <a
        href={item.twitter}
        target="_blank"
        rel="noreferrer"
        >

        <FaXTwitter/>

        </a>

        </div>

        </div>

</div>
))
}

</div>
        
      </div>
      

      <Footer />
    </>
  );
}

export default AboutUs;