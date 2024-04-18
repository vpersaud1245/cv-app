import "../styles/form.css";

function PersonalInformationInput() {
  return (
    <form action="" className="edit-form__personal-information">
      <h1 className="form__title">Personal Information</h1>
      <div className="personal-information__full-name-wrapper">
        <input
          className="personal-information__first-name-input"
          type="text"
          placeholder="First Name"
        />
        <input
          className="personal-information__last-name-input"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <input
        className="personal-information__professional-title-input"
        type="text"
        placeholder="Professional Title"
      />
    </form>
  );
}

function ProfileInput() {
  return (
    <form action="" className="edit-form__profile">
      <h1 className="form__title">Profile</h1>
      <textarea
        className="profile__about-input"
        name="about-input"
        rows="4"
        cols="50"
        placeholder="About yourself"
      ></textarea>
    </form>
  );
}

function EducationInput() {
  return (
    <form action="" className="edit-form__education">
      <h1 className="form__title">Education</h1>
      <input
        type="text"
        className="education__school-input"
        placeholder="School"
      />
      <input
        type="text"
        className="education__degree-input"
        placeholder="Degree"
      />
      <div className="education__date-wrapper">
        <div className="education__start-date-wrapper">
          <label htmlFor="education__start-date-input">Start Date</label>
          <input
            type="date"
            className="education__start-date-input"
            id="education__start-date-input"
          />
        </div>
        <div className="education__end-date-wrapper">
          <label htmlFor="education__end-date-input">End Date</label>
          <input
            type="date"
            className="education__end-date-input"
            id="education__end-date-input"
          />
        </div>
      </div>
      <button className="education__add-education-btn">
        + Add more education
      </button>
    </form>
  );
}

function WorkExperienceInput() {
  return (
    <form action="" className="edit-form__work-experience">
      <h1 className="form__title">Work Experience</h1>
      <input
        type="text"
        className="work-experience__company-input"
        placeholder="Company"
      />
      <input
        type="text"
        className="work-experience__position-input"
        placeholder="Position"
      />
      <textarea
        name="responsibilities-input"
        className="work-experience__responsibility-input"
        cols="50"
        rows="4"
        placeholder="Responsibility"
      ></textarea>
      <div className="work-experience__current-role-wrapper">
        <input
          type="checkbox"
          className="work-experience__is-current-job"
          id="work-experience__is-current-job"
        />
        <label htmlFor="work-experience__is-current-job">
          I am currently working in this role
        </label>
      </div>
      <div className="work-experience__date-wrapper">
        <div className="work-experience__start-date-wrapper">
          <label htmlFor="work-experience__start-date">Start Date</label>
          <input
            type="date"
            className="work-experience__start-date"
            id="work-experience__start-date"
          />
        </div>
        <div className="work-experience__end-date-wrapper">
          <label htmlFor="work-experience__end-date">End Date</label>
          <input
            type="date"
            className="work-experience__end-date"
            id="work-experience__end-date"
          />
        </div>
      </div>
      <button className="work-experience__add-experience-btn">
        + Add more work experience
      </button>
    </form>
  );
}

function SkillInput() {
  return (
    <form action="" className="edit-form__skills">
      <h1 className="form__title">Skills</h1>
      <input className="skills__skill-input" type="text" placeholder="Skill" />
      <button className="skills__add-skill-btn">+ Add more skills</button>
    </form>
  );
}

function ContactInput() {
  return (
    <form action="" className="edit-form__contact">
      <h1 className="form__title">Contact</h1>
      <div className="contact__phone-email-wrapper">
        <input
          type="tel"
          className="contact__phone-input"
          placeholder="Phone"
        />
        <input
          type="email"
          className="contact__email-input"
          placeholder="Email"
        />
      </div>
      <input
        type="text"
        className="contact__address-input"
        placeholder="Address"
      />
    </form>
  );
}

export default function Form() {
  return (
    <div className="edit-form">
      <PersonalInformationInput />
      <ProfileInput />
      <EducationInput />
      <WorkExperienceInput />
      <SkillInput />
      <ContactInput />
    </div>
  );
}
