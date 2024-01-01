// import './styled.css';
// import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
// import img1 from '../../assets/img/tudo.png';
// import img2 from '../../assets/img/cordel.png';
// import img3 from '../../assets/img/android.png';
// import img4 from '../../assets/img/mata-mosquito.png';
// import img5 from '../../assets/img/moonligth.png';
// import img6 from '../../assets/img/orcamento-pessoal.png';

// function Projects() {
//   return (
//     <section className="projects" id="projects">
//       <h2 className="heading">
//         Latest <span>Projects</span>
//         <span
//           className="animate scroll"
//           style={{ '--i': 1 } as React.CSSProperties}
//         ></span>
//       </h2>

//       {window.innerWidth <= 520 ? (
//         <div className="projects-container">
//           <div className="projects-box">
//             <img src={img1} alt="projeto-todo-list" />
//             <div className="projects-layer">
//               <h4>TODO-LIST</h4>
//               <a
//                 href="https://joselucas77.github.io/todo_list_react_deploy/"
//                 target="_blank"
//               >
//                 <FaArrowUpRightFromSquare />
//               </a>
//             </div>
//             <span
//               className="animate scroll"
//               style={{ '--i': 2 } as React.CSSProperties}
//             ></span>
//           </div>

//           <div className="projects-box">
//             <img src={img2} alt="projeto-todo-list" />
//             <div className="projects-layer">
//               <h4>Projeto Cordel</h4>
//               <a
//                 href="https://joselucas77.github.io/projeto-cordel/"
//                 target="_blank"
//               >
//                 <FaArrowUpRightFromSquare />
//               </a>
//             </div>
//             <span
//               className="animate scroll"
//               style={{ '--i': 3 } as React.CSSProperties}
//             ></span>
//           </div>

//           <div className="projects-box">
//             <img src={img3} alt="projeto-todo-list" />
//             <div className="projects-layer">
//               <h4>Mascote Android</h4>
//               <a
//                 href="https://joselucas77.github.io/projeto-android/"
//                 target="_blank"
//               >
//                 <FaArrowUpRightFromSquare />
//               </a>
//             </div>
//             <span
//               className="animate scroll"
//               style={{ '--i': 4 } as React.CSSProperties}
//             ></span>
//           </div>
//         </div>
//       ) : (
//         <div className="projects-container">
//           <div className="projects-box">
//             <img src={img1} alt="projeto-todo-list" />
//             <div className="projects-layer">
//               <h4>TODO-LIST</h4>
//               <a
//                 href="https://joselucas77.github.io/todo_list_react_deploy/"
//                 target="_blank"
//               >
//                 <FaArrowUpRightFromSquare />
//               </a>
//             </div>
//             <span
//               className="animate scroll"
//               style={{ '--i': 2 } as React.CSSProperties}
//             ></span>
//           </div>

//           <div className="projects-box">
//             <img src={img2} alt="projeto-todo-list" />
//             <div className="projects-layer">
//               <h4>Projeto Cordel</h4>
//               <a
//                 href="https://joselucas77.github.io/projeto-cordel/"
//                 target="_blank"
//               >
//                 <FaArrowUpRightFromSquare />
//               </a>
//             </div>
//             <span
//               className="animate scroll"
//               style={{ '--i': 3 } as React.CSSProperties}
//             ></span>
//           </div>

//           <div className="projects-box">
//             <img src={img3} alt="projeto-todo-list" />
//             <div className="projects-layer">
//               <h4>Mascote Android</h4>
//               <a
//                 href="https://joselucas77.github.io/projeto-android/"
//                 target="_blank"
//               >
//                 <FaArrowUpRightFromSquare />
//               </a>
//             </div>
//             <span
//               className="animate scroll"
//               style={{ '--i': 4 } as React.CSSProperties}
//             ></span>
//           </div>

//           <div className="projects-box">
//             <img src={img4} alt="projeto-todo-list" />
//             <div className="projects-layer">
//               <h4>Game Mosquito</h4>
//               <a
//                 href="https://joselucas77.github.io/jogo-mata_mosquito/index.html"
//                 target="_blank"
//               >
//                 <FaArrowUpRightFromSquare />
//               </a>
//             </div>
//             <span
//               className="animate scroll"
//               style={{ '--i': 5 } as React.CSSProperties}
//             ></span>
//           </div>

//           <div className="projects-box">
//             <img src={img5} alt="projeto-todo-list" />
//             <div className="projects-layer">
//               <h4>Moon Light</h4>
//               <a
//                 href="https://joselucas77.github.io/projeto-moonlight/#sec"
//                 target="_blank"
//               >
//                 <FaArrowUpRightFromSquare />
//               </a>
//             </div>
//             <span
//               className="animate scroll"
//               style={{ '--i': 6 } as React.CSSProperties}
//             ></span>
//           </div>

//           <div className="projects-box">
//             <img src={img6} alt="projeto-todo-list" />
//             <div className="projects-layer">
//               <h4>App Orçamento</h4>
//               <a
//                 href="https://joselucas77.github.io/AppOcamentoPessoal/index.html"
//                 target="_blank"
//               >
//                 <FaArrowUpRightFromSquare />
//               </a>
//             </div>
//             <span
//               className="animate scroll"
//               style={{ '--i': 7 } as React.CSSProperties}
//             ></span>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Projects;

import React, { useState, useEffect } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import './styled.css';
import img1 from '../../assets/img/tudo.png';
import img2 from '../../assets/img/cordel.png';
import img3 from '../../assets/img/android.png';
import img4 from '../../assets/img/mata-mosquito.png';
import img5 from '../../assets/img/moonligth.png';
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
    'https://joselucas77.github.io/todo_list_react_deploy/',
    'https://joselucas77.github.io/projeto-cordel/',
    'https://joselucas77.github.io/projeto-android/',
    'https://joselucas77.github.io/jogo-mata_mosquito/index.html',
    'https://joselucas77.github.io/projeto-moonlight/#sec',
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
