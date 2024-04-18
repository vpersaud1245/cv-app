/* eslint-disable react/prop-types */
import "../styles/preview.css";

function PersonalInformation({ firstName, lastName }) {
  return (
    <div className="preview__personal-information">
      <h1 className="personal-information__full-name">
        <span className="personal-inforamtion__full-name--first">
          {firstName}
        </span>
        <span className="personal-inforamtion__full-name--last">
          {lastName}
        </span>
      </h1>
      <hr />
      <h2 className="personal-information__professional-title">
        PROFESSIONAL TITLE
      </h2>
      <hr />
    </div>
  );
}

function Profile() {
  return (
    <div className="main-content__profile">
      <h1 className="content__title">PROFILE</h1>
      <p className="profile__content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quod fuga
        corrupti quam laboriosam obcaecati provident, iure ducimus similique
        voluptatum commodi labore. Sunt perspiciatis odio nulla vero, itaque nam
        architecto.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="main-content__contact">
      <h1 className="content__title">CONTACT</h1>
      <div className="contact__address">123 FOR US ALL ST, LAGOS, NIGERIA</div>
      <div className="contact__email">thisismyname@thisismyemail.com</div>
      <div className="contact__phone">123-456-7890</div>
    </div>
  );
}

function Education() {
  return (
    <div className="main-content__education">
      <h1 className="content__title">TITLE</h1>
      <h2 className="education__degree">DEGREE</h2>
      <h3 className="education__school">SCHOOL</h3>
      <h4 className="education__dates">
        <span className="education__dates--start">START - </span>
        <span className="education__dates--stop">END</span>
      </h4>
    </div>
  );
}

function Skills() {
  return (
    <div className="main-content__skills">
      <h1 className="content__title">SKILLS</h1>
      <ul className="skills__list">
        <li className="skills-list__item">Skill 1</li>
        <li className="skills-list__item">Skill 2</li>
      </ul>
    </div>
  );
}

function WorkExperience() {
  return (
    <div className="main-content__work-experience">
      <h1 className="content__title">WORK EXPERIENCE</h1>
      <div className="work-experience__position-and-dates">
        <span className="position-and-dates__position">POSITION</span>
        <div className="position-and-dates__dates">
          <span className="dates__start">START</span>
          <span className="dates__end">END</span>
        </div>
      </div>
      <h2 className="work-experience__company-name">COMPANY NAME</h2>
      <p className="work-experience__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ratione
        eius, eaque tempore voluptatem, soluta nesciunt voluptatibus, modi
        architecto itaque nobis neque amet impedit voluptates deserunt quibusdam
        corrupti. Consequuntur, ex? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Reiciendis blanditiis id eos veniam ea illum pariatur
        quae distinctio odio amet eligendi aliquam, molestiae repudiandae
        aliquid eius cumque nobis ipsa alias.
      </p>
    </div>
  );
}

function MainContent() {
  return (
    <div className="preview__main-content">
      <div className="main-content--left">
        <Profile />
        <Contact />
        <Education />
        <Skills />
      </div>
      <div className="vl"></div>
      <div className="main-content--right">
        <WorkExperience />
      </div>
    </div>
  );
}

export default function Preview({ firstName, lastName }) {
  return (
    <div className="preview">
      <PersonalInformation firstName={firstName} lastName={lastName} />
      <MainContent />
    </div>
  );
}
