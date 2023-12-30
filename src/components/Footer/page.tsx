import './styled.css';
import { FaArrowUp } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2023 by José Lucas | All Rights Reserved.</p>
      </div>

      <div className="footer-iconTop">
        <a href="#home">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
