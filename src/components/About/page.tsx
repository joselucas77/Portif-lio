import './styled.css';
import img from '../../assets/img/perfil.jpg';

function About() {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        About <span>me</span>
        <span
          className="animate scroll"
          style={{ '--i': 1 } as React.CSSProperties}
        ></span>
      </h2>

      <div className="about-img">
        <img src={img} alt="" />
        <span className="circle-spin"></span>
        <span
          className="animate scroll"
          style={{ '--i': 2 } as React.CSSProperties}
        ></span>
      </div>

      <div className="about-content">
        <h3>
          Full-Stack Developer!
          <span
            className="animate scroll"
            style={{ '--i': 3 } as React.CSSProperties}
          ></span>
        </h3>
        <p>
          Eu conheci a área da programaçao dentro da faculdade(Engenharia da
          computação), a qual estou atualmente no 6 período, e desde então eu
          começei a estudar e me dedicar ao desenvolvimento web. A mais de um
          ano eu venho focando em me desenvolver para entrar no mercado,
          buscando promover novas ideias e inovações por onde eu passar.
          <span
            className="animate scroll"
            style={{ '--i': 4 } as React.CSSProperties}
          ></span>
        </p>
      </div>
    </section>
  );
}

export default About;
