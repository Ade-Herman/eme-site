/**
 * About Component
 * Brief course overview and information section
 */
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About EME</h2>
          <div className="about-accent-line"></div>
          <p>
            At EME, we believe that mastering a language requires both a strong
            foundation and the confidence to use it. We go beyond standard
            textbook exercises, focusing on a comprehensive approach that bridges
            the gap between understanding complex grammar and speaking naturally.
          </p>
          <p>
            Whether you are dissecting advanced sentence structures or engaging in
            dynamic conversations about everyday life and social etiquette, our
            goal is to equip you with the practical skills needed to thrive in any
            English-speaking environment.
          </p>
        </div>
        <div className="about-image-column">
          <img
            src="https://via.placeholder.com/500x350"
            alt="EME English learning environment"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
