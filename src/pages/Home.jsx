import ImageSlider from "../components/ImageSlider";
import InstructorCarousel from "../components/Instructor";
import ProgramsSection from "../components/Programs";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Top Image Slider */}
      <section className="slider-section">
        <ImageSlider />
      </section>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to TEAM MKAI KARATE</h1>
        <p>
          {/* Where discipline, confidence, and strength are built through Karate
          training. Headed by <b>Sensei K. Manikandan</b> (4th Dan, KIO -
          National Judge) under the mentorship of <b>Shihan B. Duraivelu</b>{" "}
          (6th Dan, AKF & WKF - Judge). With years of experience and a strong
          foundation in traditional & Sports karate, our team is dedicated to
          spreading the true spirit of martial arts.  */}
          At Meishin Karate Association of Integrity (MKAI), karate is more than
          a sport—it is a way of life. Guided by integrity and a clear state of
          mind, we train students to develop discipline, confidence, and moral
          strength through structured traditional and competitive karate
          practice. Led by Sensei K. Manikandan (4th Dan, KIO – National Judge),
          MKAI Karate upholds the principles of respect, self-control, and
          perseverance in all aspects of training.
        </p>
      </section>

      {/* Instructors Section */}
      <section className="instructors-section">
        <InstructorCarousel />
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <ProgramsSection />
      </section>

      {/* Outro Text */}
      <section className="hero outro">
        <p>
          Over the years, TEAM MKAI KARATE has built a proven track record of
          success, producing champions who have excelled at State and National
          levels.
        </p>
      </section>
    </div>
  );
}

export default Home;
