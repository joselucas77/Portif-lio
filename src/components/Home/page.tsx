import './styled.css';
import { FaInstagram } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaAt } from 'react-icons/fa6';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span>José Lucas</span>
        </h1>
        <div className="text-animate">
          <h3>Full-Stack Developer</h3>
        </div>
        <p>
          <q>Sou só um vírus, querendo escapar, dos programadores da vida.</q>
          <br />
          <em>
            <FaAt /> Wesley D'Amico
          </em>
        </p>

        <div className="btn-box">
          <a href="#" className="btn">
            Hire Me
          </a>
          <a href="#" className="btn">
            Let's Talk
          </a>
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
      </div>

      <div className="home-imgHover"></div>
    </section>
  );
}

export default Home;
