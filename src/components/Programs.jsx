/**
 * Programs Component
 * Details on what courses are taught
 */
import "../styles/Programs.css";

function Programs() {
  return (
    <section id="programs" className="programs">
      <div className="programs-container">
        <h2>Our Programs</h2>
        <div className="programs-grid">
          <div className="program-card">
            <h3>Advanced Grammar</h3>
            <p>
              Build a rock-solid foundation by mastering complex structures, from
              verb tenses to relative and adverb clauses.
            </p>
            <a href="#" className="learn-more">
              Learn More →
            </a>
          </div>
          <div className="program-card">
            <h3>Conversational Fluency</h3>
            <p>
              Build your speaking confidence through dynamic, real-world discussions
              ranging from everyday shopping habits to navigating social etiquette.
            </p>
            <a href="#" className="learn-more">
              Learn More →
            </a>
          </div>
          <div className="program-card">
            <h3>Exam Preparation</h3>
            <p>
              Targeted strategies and rigorous practice to help you achieve your
              desired scores on proficiency exams.
            </p>
            <a href="#" className="learn-more">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
