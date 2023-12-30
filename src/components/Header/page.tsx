// import { useState, useEffect } from 'react';
// import './styled.css';
// import { FaTerminal } from 'react-icons/fa6';
// import { FaBars } from 'react-icons/fa6';
// import { FaXmark } from 'react-icons/fa6';

// function Header() {
//   const [activeLink, setActiveLink] = useState('#home');
//   const [bars, setBars] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('section');
//       sections.forEach((sec) => {
//         const top = window.scrollY;
//         const offset = sec.offsetTop - 100;
//         const height = sec.offsetHeight;
//         const id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//           setActiveLink(`#${id}`);
//         }
//       });

//       let header = document.querySelector('header');
//       header?.classList.toggle('sticky', window.scrollY > 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const navLinks = [
//     { href: '#home', text: 'Home' },
//     { href: '#about', text: 'About' },
//     { href: '#education', text: 'Education' },
//     { href: '#skills', text: 'Skills' },
//     { href: '#projects', text: 'Projects' },
//     { href: '#contact', text: 'Contact' },
//   ];

//   return (
//     <header className="header">
//       <a href="#" className="logo">
//         <FaTerminal /> Hello World!
//       </a>

//       <div id="menu-icon" onClick={() => setBars(!bars)}>
//         {bars ? <FaBars /> : <FaXmark />}
//       </div>

//       <nav className={!bars ? 'navbar active' : 'navbar'}>
//         {navLinks.map((link) => (
//           <a
//             key={link.href}
//             href={link.href}
//             className={activeLink === link.href ? 'active' : ''}
//             onClick={() => setBars(!bars)}
//           >
//             {link.text}
//           </a>
//         ))}
//         <span className="active-nav"></span>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import { useState, useEffect } from 'react';
import './styled.css';
import { FaTerminal } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';
function Header() {
  const [activeLink, setActiveLink] = useState('#home');
  const [bars, setBars] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          setActiveLink(`#${id}`);
        }
      });

      let header = document.querySelector('header');
      header?.classList.toggle('sticky', window.scrollY > 100);
    };

    const handleResize = () => {
      setMobileView(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setBars(!bars);
  };

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#education', text: 'Education' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <header className={`header${bars && mobileView ? ' mobile-view' : ''}`}>
      <a href="#" className="logo">
        <FaTerminal /> Hello World!
      </a>
      <div id="menu-icon" onClick={toggleMenu}>
        {bars ? <FaXmark /> : <FaBars />}
      </div>

      <nav className={`navbar${bars && mobileView ? ' active' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeLink === link.href ? 'active' : ''}
            onClick={() => setBars(false)}
          >
            {link.text}
          </a>
        ))}
        <span className="active-nav"></span>
      </nav>
    </header>
  );
}

export default Header;
