import './styled.css';
import { FaInstagram, FaLinkedinIn, FaGithub, FaAt } from 'react-icons/fa6';
import cv from '../../assets/cv.pdf';

function Home() {
  return (
    <section className="home show-animate" id="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span>José Lucas</span>
          <span
            className="animate"
            style={{ '--i': 2 } as React.CSSProperties}
          ></span>
        </h1>
        <div className="text-animate">
          <h3>Full-Stack Developer</h3>
          <span
            className="animate"
            style={{ '--i': 3 } as React.CSSProperties}
          ></span>
        </div>
        <p>
          <q>Sou só um vírus, querendo escapar, dos programadores da vida.</q>
          <br />
          <em>
            <FaAt /> Wesley D'Amico
          </em>
          <span
            className="animate"
            style={{ '--i': 4 } as React.CSSProperties}
          ></span>
        </p>

        <div className="btn-box">
          <a href="#contact" className="btn">
            Let's Talk
          </a>
          <a href={cv} className="btn" download>
            Download CV
          </a>
          <span
            className="animate"
            style={{ '--i': 5 } as React.CSSProperties}
          ></span>
        </div>
      </div>

      <div className="home-sci">
        <a href="https://www.instagram.com/jose_lucassc/" target="_blank">
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/jos%C3%A9-lucas-a045661a0/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/joselucas77" target="_blank">
          <FaGithub />
        </a>
        <span
          className="animate"
          style={{ '--i': 6 } as React.CSSProperties}
        ></span>
      </div>

      {/* <div className="home-imgHover"></div> */}
      <span
        className="animate home-img"
        style={{ '--i': 7 } as React.CSSProperties}
      ></span>
    </section>
  );
}

export default Home;
