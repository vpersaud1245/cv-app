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

function Contact({ contactData }) {
  return (
    <div className="main-content__contact">
      <h1 className="content__title">CONTACT</h1>
      <div className="contact__address">{contactData.address}</div>
      <div className="contact__email">{contactData.email}</div>
      <div className="contact__phone">{contactData.phone}</div>
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

function Skills({ skillData }) {
  const skillItems = skillData.map((skillObj) => (
    <li className="skills-list__item" key={skillObj.id}>
      {skillObj.skill}
    </li>
  ));
  return (
    <div className="main-content__skills">
      <h1 className="content__title">SKILLS</h1>
      <ul className="skills__list">{skillItems}</ul>
    </div>
  );
}

function WorkExperience({ workExperienceData }) {
  const workExperienceItems = workExperienceData.map((workExperienceObj) => (
    <div className="experience__item" key={workExperienceObj.id}>
      <div className="work-experience__position-and-dates">
        <span className="position-and-dates__position">
          {workExperienceObj.position}
        </span>
        <div className="position-and-dates__dates">
          <span className="dates__start">{workExperienceObj.start}</span>
          <span>-</span>
          <span className="dates__end">{workExperienceObj.end}</span>
        </div>
      </div>
      <h2 className="work-experience__company-name">
        {workExperienceObj.companyName}
      </h2>
      <p className="work-experience__description">
        {workExperienceObj.description}
      </p>
    </div>
  ));
  return (
    <div className="main-content__work-experience">
      <h1 className="content__title">WORK EXPERIENCE</h1>
      <div className="work-experience__items">{workExperienceItems}</div>
    </div>
  );
}

function MainContent({
  profileContent,
  educationData,
  workExperienceData,
  skillData,
  contactData,
}) {
  return (
    <div className="preview__main-content">
      <div className="main-content--left">
        <Profile profileContent={profileContent} />
        <Contact contactData={contactData} />
        <Education educationData={educationData} />
        <Skills skillData={skillData} />
      </div>
      <div className="vl"></div>
      <div className="main-content--right">
        <WorkExperience workExperienceData={workExperienceData} />
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
  workExperienceData,
  skillData,
  contactData,
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
        workExperienceData={workExperienceData}
        skillData={skillData}
        contactData={contactData}
      />
    </div>
  );
}
