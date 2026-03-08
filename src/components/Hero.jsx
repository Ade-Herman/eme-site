/**
 * Hero Component
 * Main landing section with welcoming headline and CTA
 */
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Master English with Confidence.</h1>
        <p>
          From mastering essential grammar like relative clauses and verb tenses
          to fluent, real-world conversations. Start your journey today.
        </p>
        <button className="cta-button">Explore Programs</button>
      </div>
    </section>
  );
}

export default Hero;
