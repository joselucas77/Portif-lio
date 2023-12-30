import './styled.css';
import img from '../../assets/img/meAbout.jpg';

function About() {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        About <span>me</span>
      </h2>

      <div className="about-img">
        <img src={img} alt="" />
        <span className="circle-spin"></span>
      </div>

      <div className="about-content">
        <h3>Full-Stack Developer!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          accusamus tempore molestias fugit maiores ipsum. Totam, error magnam
          repellat nesciunt vitae at, consequatur repellendus quibusdam fugit
          corporis laborum, similique adipisci!
        </p>

        <div className="btn-box btns">
          <a href="#" className="btn">
            Read More...
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
