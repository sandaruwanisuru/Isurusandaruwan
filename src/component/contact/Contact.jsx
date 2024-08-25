import './Contact.css';
import { FaPaperPlane, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const contactSection = document.querySelector('.contact');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contactSection.classList.add('animate');
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the section is visible
    );

    observer.observe(contactSection);
  }, []);

  const scriptURL =
    'https://script.google.com/macros/s/AKfycby6TXWCyC5RiAzxBIKzJbS-ff5HkVaiee7TYui3JgMAy5LeDpHq-AAkGFb3IT46HNIrEQ/exec';

  const submitform = (e) => {
    e.preventDefault();

    const form = e.target;
    const msg = document.getElementById('msg');

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = 'Message sent successfully';
        setTimeout(() => {
          msg.innerHTML = '';
        }, 5000);
        form.reset();
      })
      .catch((error) => console.error('Error!', error.message));
  };

  return (
    <div className="contact">
      <h1 className="Title">Contact Me</h1>
      <div className="container">
        <div className="contacLeft">
          <p>
            <span>
              <FaPaperPlane />
            </span>
            sandaruwanisuru973@gmail.com
          </p>
          <p>
            <span>
              <FaPhone />
            </span>
            077 9811322
          </p>
          <a href="https://www.linkedin.com/in/isuru-sandaruwan-a481a1216/">
            <FaLinkedinIn /> <span>LinkedIn</span>
          </a>
        </div>
        <div className="contacRight">
          <form onSubmit={submitform} className="googleSheet">
            <input type="text" name="Name" placeholder="Your name" required />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              name="Message"
              rows="6"
              placeholder="Your message"
            ></textarea>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
          <span id="msg"></span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
