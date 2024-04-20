/* eslint-disable react/prop-types */
import "../styles/preview.css";

function PersonalInformation({ firstName, lastName, professionalTitle }) {
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
        {professionalTitle}
      </h2>
      <hr />
    </div>
  );
}

function Profile({ profileContent }) {
  return (
    <div className="main-content__profile">
      <h1 className="content__title">PROFILE</h1>
      <p className="profile__content">{profileContent}</p>
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

function Education({ educationData }) {
  const educationItems = educationData.map((educationObj) => (
    <div className="education__item" key={educationObj.id}>
      <h2 className="education__degree">{educationObj.degree}</h2>
      <h3 className="education__school">{educationObj.school}</h3>
      <h4 className="education__dates">
        <span className="education__dates--start">{educationObj.start}</span>
        <span> - </span>
        <span className="education__dates--stop">{educationObj.end}</span>
      </h4>
    </div>
  ));
  return (
    <div className="main-content__education">
      <h1 className="content__title">EDUCATION</h1>
      {educationItems}
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
        corrupti.
      </p>
    </div>
  );
}

function MainContent({ profileContent, educationData }) {
  return (
    <div className="preview__main-content">
      <div className="main-content--left">
        <Profile profileContent={profileContent} />
        <Contact />
        <Education educationData={educationData} />
        <Skills />
      </div>
      <div className="vl"></div>
      <div className="main-content--right">
        <WorkExperience />
      </div>
    </div>
  );
}

export default function Preview({
  firstName,
  lastName,
  professionalTitle,
  profileContent,
  educationData,
}) {
  return (
    <div className="preview">
      <PersonalInformation
        firstName={firstName}
        lastName={lastName}
        professionalTitle={professionalTitle}
      />
      <MainContent
        profileContent={profileContent}
        educationData={educationData}
      />
    </div>
  );
}
