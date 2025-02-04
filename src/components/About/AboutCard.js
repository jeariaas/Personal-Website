import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi There! <br />I am <span className="purple">Jesus Arias </span>
            from sunny <span className="purple"> Gilbert, Arizona.</span>
            <br/>
            <br/>
            <ul> <li> I am currently a <u>Software and Device Reliability Engineer</u> at <u>Microchip Technology.</u></li> 
            <br/>
            <li>I have a <u>Bachelor of Science in Electrical and Computer Engineering</u> with a minor in <u>Mathematics.</u></li>
            <br/>
            </ul>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Tinkering with Electronics
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
