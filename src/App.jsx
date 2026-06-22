import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import me from './assets/me.png'
import { Container, Row, Col } from "react-bootstrap";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import Particle from './Particle';
import dragon from './assets/dragon.png'; 

/*
  type writer effect
 about me section
*/
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center" className="dark-mode">
        <Particle />
        <Container>
          <Row>
            <Col md={7}>
              <h1 style={{ textAlign: "left",paddingBottom: 15, fontSize: 50 }}>
                Hi, I'm Ming Luo
              </h1>
              <div style={{ textAlign: "left" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Software Developer",
                      "Volunteer",
                      "Hobbyist Musician"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    wrapperClassName: 'typewriter-text'
                  }}
                  textStyle={{
                    fontSize: '48px', 
                    color: '#ff5722',
                    fontWeight: 'bold'
                  }}>
                  </Typewriter>
                </div>
            </Col>
            <Col md={5}>
              <img
                src={me}
                style={{ maxHeight: "450px", index: 1201 }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={7}>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/GiantPandaProgrammer"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub size={30} color="#e4e4e4"/>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/ming-luo-94286325/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn size={30} color="#e4e4e4"/>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="./my_game.html"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <img src={dragon} alt="Dragon" style={{ width: '32px', height: '32px' }} />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default App
