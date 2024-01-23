import React, { useState, useEffect } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import './styled.css';
import img1 from '../../assets/img/lista-paises.png';
import img2 from '../../assets/img/blog-next.jpg';
import img3 from '../../assets/img/help-desk.png';
import img4 from '../../assets/img/lista-tarefas.png';
import img5 from '../../assets/img/mata-mosquito.png';
import img6 from '../../assets/img/orcamento-pessoal.png';

function Projects() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const projectsLinks = [
    'https://lista-de-paises-next-mtmelcv9i-joselucas77s-projects.vercel.app/',
    'https://github.com/joselucas77/blog-next',
    'https://github.com/joselucas77/app_help_desk',
    'https://github.com/joselucas77/Lista-de-tarefas-php',
    'https://joselucas77.github.io/jogo-mata_mosquito/index.html',
    'https://joselucas77.github.io/AppOcamentoPessoal/index.html',
  ];

  const projectsToShow =
    windowWidth <= 520
      ? [img1, img2, img3]
      : [img1, img2, img3, img4, img5, img6];

  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        Latest <span>Projects</span>
        <span
          className="animate scroll"
          style={{ '--i': 1 } as React.CSSProperties}
        ></span>
      </h2>

      <div className="projects-container">
        {projectsToShow.map((imgSrc, index) => (
          <div className="projects-box" key={index}>
            <img src={imgSrc} alt={`project-${index + 1}`} />
            <div className="projects-layer">
              <a href={projectsLinks[index]} target="_blank">
                <FaArrowUpRightFromSquare />
              </a>
            </div>
            <span
              className="animate scroll"
              style={{ '--i': index + 2 } as React.CSSProperties}
            ></span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
