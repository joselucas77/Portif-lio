import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Slide } from 'react-toastify';
import './styled.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const notifySuccess = () => {
    toast.success('Seu E-mail foi enviado!!', {
      toastId: 'email',
      position: 'top-right',
      transition: Slide,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const notifyError = () => {
    toast.error('E-mail não enviado!!', {
      toastId: 'error',
      position: 'top-right',
      transition: Slide,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  function sendEmail(e: any) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('Por favor, preencha as informações!');
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        'service_frws0ii',
        'template_02fsk65',
        templateParams,
        'YLCREEIkU1Or7li25'
      )
      .then(
        (response) => {
          notifySuccess();
          setName('');
          setEmail('');
          setMessage('');
          console.log(response.status, response.text);
        },
        (error) => {
          notifyError();
          console.log(error);
        }
      );
  }

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
        <span
          className="animate scroll"
          style={{ '--i': 1 } as React.CSSProperties}
        ></span>
      </h2>

      <form onSubmit={sendEmail}>
        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <span className="focus"></span>
            <span
              className="animate scroll"
              style={{ '--i': 2 } as React.CSSProperties}
            ></span>
          </div>
          <div className="input-field">
            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
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
            onChange={(e) => setMessage(e.target.value)}
            value={message}
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
