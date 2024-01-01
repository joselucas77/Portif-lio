import './styled.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
        <span
          className="animate scroll"
          style={{ '--i': 1 } as React.CSSProperties}
        ></span>
      </h2>

      <form action="#">
        <div className="input-box">
          <div className="input-field">
            <input type="text" placeholder="Full Name" required />
            <span className="focus"></span>
            <span
              className="animate scroll"
              style={{ '--i': 2 } as React.CSSProperties}
            ></span>
          </div>
          <div className="input-field">
            <input type="email" placeholder="Email Address" required />
            <span className="focus"></span>
            <span
              className="animate scroll"
              style={{ '--i': 3 } as React.CSSProperties}
            ></span>
          </div>
        </div>

        <div className="textarea-field">
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Your Message"
            required
          ></textarea>
          <span className="focus"></span>
          <span
            className="animate scroll"
            style={{ '--i': 4 } as React.CSSProperties}
          ></span>
        </div>

        <div className="btn-box btns">
          <button type="submit" className="btn">
            Submit
          </button>
          <span
            className="animate scroll"
            style={{ '--i': 5 } as React.CSSProperties}
          ></span>
        </div>
      </form>
    </section>
  );
}

export default Contact;
