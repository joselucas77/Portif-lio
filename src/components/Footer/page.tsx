import { useEffect } from 'react';

import './styled.css';
import { FaArrowUp } from 'react-icons/fa6';

function Footer() {
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const shouldShowAnimate =
          window.innerHeight + window.scrollY >=
          (document.scrollingElement?.scrollHeight || 0);

        footer.classList.toggle('show-animate', shouldShowAnimate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2023 by José Lucas | All Rights Reserved.</p>
        <span
          className="animate scroll"
          style={{ '--i': 1 } as React.CSSProperties}
        ></span>
      </div>

      <div className="footer-iconTop">
        <a href="#home">
          <FaArrowUp />
        </a>
        <span
          className="animate scroll"
          style={{ '--i': 2 } as React.CSSProperties}
        ></span>
      </div>
    </footer>
  );
}

export default Footer;
