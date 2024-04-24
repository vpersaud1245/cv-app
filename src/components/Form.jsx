import "../styles/form.css";
import Preview from "./Preview";
import { useState } from "react";

function formatDate(inputDate) {
  const dateParts = inputDate.split("-"); // Split the input date by hyphens
  const year = dateParts[0]; // Get the year part
  const month = dateParts[1]; // Get the month part

  return `${month}/${year}`; // Return the formatted date
}

export default function ResumeBuilder() {
  const [firstName, setFirstName] = useState("First");
  const [lastName, setLastName] = useState("Last");
  const [professionalTitle, setProfessionalTitle] =
    useState("Professional Title");
  const [profileContent, setProfileContent] = useState(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quod fuga corrupti quam laboriosam obcaecati provident, iure ducimus similique voluptatum commodi labore. Sunt perspiciatis odio nulla vero, itaque nam architecto."
  );

  // Education section
  const educationSection = [];
  const [numOfEducationSections, setNumOfEducationSections] = useState(1);
  const [educationData, setEducationData] = useState([
    { id: 1, degree: "Degree", school: "School", start: "Start", end: "End" },
  ]);
  for (let i = 1; i <= numOfEducationSections; i += 1) {
    educationSection.push(
      <div className="education__section" key={i}>
        {i > 1 && (
          <button
            className="education__remove-education-btn"
            onClick={(e) => {
              e.preventDefault();
              setEducationData(educationData.toSpliced(1, 1));
              educationSection.pop();
              setNumOfEducationSections(1);
            }}
          >
            Remove
          </button>
        )}
        <input
          type="text"
          className="education__school-input"
          placeholder="School"
          onChange={(e) => {
            const changedEducationData = educationData.map((educationObj) => {
              if (educationObj.id === i) {
                return {
                  ...educationObj,
                  school: e.target.value.length > 0 ? e.target.value : "School",
                };
              } else return educationObj;
            });
            setEducationData(changedEducationData);
          }}
        />
        <input
          type="text"
          className="education__degree-input"
          placeholder="Degree"
          onChange={(e) => {
            const changedEducationData = educationData.map((educationObj) => {
              if (educationObj.id === i) {
                return {
                  ...educationObj,
                  degree: e.target.value.length > 0 ? e.target.value : "Degree",
                };
              } else return educationObj;
            });
            setEducationData(changedEducationData);
          }}
        />
        <div className="education__date-wrapper">
          <div className="education__start-date-wrapper">
            <label htmlFor="education__start-date-input">Start Date</label>
            <input
              type="date"
              className="education__start-date-input"
              id="education__start-date-input"
              onChange={(e) => {
                const changedEducationData = educationData.map(
                  (educationObj) => {
                    if (educationObj.id === i) {
                      return {
                        ...educationObj,
                        start:
                          e.target.value.length > 0
                            ? formatDate(e.target.value)
                            : "Start",
                      };
                    } else return educationObj;
                  }
                );
                console.log(e.target.value);
                const endDateInput =
                  e.target.parentElement.nextElementSibling.lastElementChild;
                endDateInput.setAttribute("min", e.target.value);
                setEducationData(changedEducationData);
              }}
            />
          </div>
          <div className="education__end-date-wrapper">
            <label htmlFor="education__end-date-input">End Date</label>
            <input
              type="date"
              className="education__end-date-input"
              id="education__end-date-input"
              onChange={(e) => {
                const changedEducationData = educationData.map(
                  (educationObj) => {
                    if (educationObj.id === i) {
                      return {
                        ...educationObj,
                        end:
                          e.target.value.length > 0
                            ? formatDate(e.target.value)
                            : "End",
                      };
                    } else return educationObj;
                  }
                );
                setEducationData(changedEducationData);
              }}
            />
          </div>
        </div>
        {numOfEducationSections > 1 && i === 1 && (
          <hr className="education__line-break"></hr>
        )}
      </div>
    );
  }

  // Experience section
  const experienceSection = [];
  const [numOfExperienceSections, setNumOfExperienceSections] = useState(0);
  const [workExperienceData, setWorkExperienceData] = useState([
    {
      id: 0,
      position: "Position",
      start: "Start",
      end: "End",
      companyName: "Company Name",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem rationeeius, eaque tempore voluptatem, soluta nesciunt voluptatibus, modiarchitecto itaque nobis neque amet impedit voluptates deserunt quibusdamcorrupti.",
    },
  ]);
  for (let i = 0; i <= numOfExperienceSections; i += 1) {
    experienceSection.push(
      <div className="work-experience__experience-section" key={i}>
        {i > 0 && (
          <button
            className="work-exprerience__remove-experience-btn"
            onClick={(e) => {
              e.preventDefault();
              setNumOfExperienceSections(numOfExperienceSections - 1);
              setWorkExperienceData(workExperienceData.toSpliced(i, 1));
              educationSection.splice(i, 1);
            }}
          >
            Remove
          </button>
        )}
        <input
          type="text"
          className="work-experience__company-input"
          placeholder="Company"
          onChange={(e) => {
            const changedWorkExperienceData = workExperienceData.map(
              (workExperienceObj) => {
                if (workExperienceObj.id === i) {
                  return {
                    ...workExperienceObj,
                    companyName:
                      e.target.value.length > 0
                        ? e.target.value
                        : "Company Name",
                  };
                } else return workExperienceObj;
              }
            );
            setWorkExperienceData(changedWorkExperienceData);
          }}
        />
        <input
          type="text"
          className="work-experience__position-input"
          placeholder="Position"
          onChange={(e) => {
            const changedWorkExperienceData = workExperienceData.map(
              (workExperienceObj) => {
                if (workExperienceObj.id === i) {
                  return {
                    ...workExperienceObj,
                    position:
                      e.target.value.length > 0 ? e.target.value : "Position",
                  };
                } else return workExperienceObj;
              }
            );
            setWorkExperienceData(changedWorkExperienceData);
          }}
        />
        <textarea
          name="responsibilities-input"
          className="work-experience__responsibility-input"
          cols="50"
          rows="4"
          placeholder="Responsibility"
          onChange={(e) => {
            const changedWorkExperienceData = workExperienceData.map(
              (workExperienceObj) => {
                if (workExperienceObj.id === i) {
                  return {
                    ...workExperienceObj,
                    description:
                      e.target.value.length > 0
                        ? e.target.value
                        : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem rationeeius, eaque tempore voluptatem, soluta nesciunt voluptatibus, modiarchitecto itaque nobis neque amet impedit voluptates deserunt quibusdamcorrupti.",
                  };
                } else return workExperienceObj;
              }
            );
            setWorkExperienceData(changedWorkExperienceData);
          }}
        ></textarea>
        <div className="work-experience__current-role-wrapper">
          <input
            type="checkbox"
            className="work-experience__is-current-job"
            id="work-experience__is-current-job"
            onChange={(e) => {
              if (e.target.checked === true) {
                e.target.parentElement.nextElementSibling.lastChild.lastChild.classList.remove(
                  "work-experience__end-date"
                );
                e.target.parentElement.nextElementSibling.lastChild.lastChild.classList.add(
                  "work-experience__end-date--current"
                );
                const dateEndInput =
                  e.target.parentElement.nextElementSibling.lastChild.lastChild;
                dateEndInput.value = "";
                const changedWorkExperienceData = workExperienceData.map(
                  (workExperienceObj) => {
                    if (workExperienceObj.id === i) {
                      return {
                        ...workExperienceObj,
                        end: "Present",
                      };
                    } else return workExperienceObj;
                  }
                );
                setWorkExperienceData(changedWorkExperienceData);
              } else if (e.target.checked === false) {
                e.target.parentElement.nextElementSibling.lastChild.lastChild.classList.remove(
                  "work-experience__end-date--current"
                );
                e.target.parentElement.nextElementSibling.lastChild.lastChild.classList.add(
                  "work-experience__end-date"
                );
                const changedWorkExperienceData = workExperienceData.map(
                  (workExperienceObj) => {
                    if (workExperienceObj.id === i) {
                      const dateEndInput =
                        e.target.parentElement.nextElementSibling.lastChild
                          .lastChild;
                      dateEndInput.value = "";
                      return {
                        ...workExperienceObj,
                        end: "end",
                      };
                    } else return workExperienceObj;
                  }
                );
                setWorkExperienceData(changedWorkExperienceData);
              }
            }}
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
              onChange={(e) => {
                const changedWorkExperienceData = workExperienceData.map(
                  (workExperienceObj) => {
                    if (workExperienceObj.id === i) {
                      return {
                        ...workExperienceObj,
                        start:
                          e.target.value.length > 0
                            ? formatDate(e.target.value)
                            : "start",
                      };
                    } else return workExperienceObj;
                  }
                );
                setWorkExperienceData(changedWorkExperienceData);
              }}
            />
          </div>
          <div className="work-experience__end-date-wrapper">
            <label htmlFor="work-experience__end-date">End Date</label>
            <input
              type="date"
              className="work-experience__end-date"
              onChange={(e) => {
                const changedWorkExperienceData = workExperienceData.map(
                  (workExperienceObj) => {
                    if (workExperienceObj.id === i) {
                      return {
                        ...workExperienceObj,
                        end:
                          e.target.value.length > 0
                            ? formatDate(e.target.value)
                            : "end",
                      };
                    } else return workExperienceObj;
                  }
                );
                setWorkExperienceData(changedWorkExperienceData);
              }}
            />
          </div>
        </div>
        {numOfExperienceSections > 0 && (
          <hr className="work-experience__line-break"></hr>
        )}
      </div>
    );
  }
  return (
    <div className="resume-wrapper">
      <div className="edit-form">
        <form action="" className="edit-form__personal-information">
          <h1 className="form__title">Personal Information</h1>
          <div className="personal-information__full-name-wrapper">
            <input
              className="personal-information__first-name-input"
              type="text"
              placeholder="First Name"
              onChange={(e) =>
                setFirstName(
                  e.target.value.length > 0 ? e.target.value : "First"
                )
              }
            />
            <input
              className="personal-information__last-name-input"
              type="text"
              placeholder="Last Name"
              onChange={(e) =>
                setLastName(e.target.value.length > 0 ? e.target.value : "Last")
              }
            />
          </div>
          <input
            className="personal-information__professional-title-input"
            type="text"
            placeholder="Professional Title"
            onChange={(e) =>
              setProfessionalTitle(
                e.target.value.length > 0
                  ? e.target.value
                  : "Professional Title"
              )
            }
          />
        </form>

        <form action="" className="edit-form__profile">
          <h1 className="form__title">Profile</h1>
          <textarea
            className="profile__about-input"
            name="about-input"
            rows="4"
            cols="50"
            placeholder="About yourself"
            onChange={(e) => {
              console.log(e.target.value);
              setProfileContent(
                e.target.value.length > 0
                  ? e.target.value
                  : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quod fuga corrupti quam laboriosam obcaecati provident, iure ducimus similique voluptatum commodi labore. Sunt perspiciatis odio nulla vero, itaque nam architecto."
              );
            }}
          ></textarea>
        </form>

        <form action="" className="edit-form__education">
          <h1 className="form__title">Education</h1>
          {educationSection}
          {numOfEducationSections < 2 && (
            <button
              className="education__add-education-btn"
              onClick={(e) => {
                e.preventDefault();
                setNumOfEducationSections(2);
                setEducationData([
                  ...educationData,
                  {
                    id: 2,
                    degree: "Degree",
                    school: "School",
                    start: "Start",
                    end: "End",
                  },
                ]);
              }}
            >
              + Add more education
            </button>
          )}
        </form>

        <form action="" className="edit-form__work-experience">
          <h1 className="form__title">Work Experience</h1>
          {experienceSection}
          {numOfExperienceSections < 2 && (
            <button
              className="work-experience__add-experience-btn"
              onClick={(e) => {
                e.preventDefault();
                const experienceSections = numOfExperienceSections + 1;
                setNumOfExperienceSections(experienceSections);
                setWorkExperienceData([
                  ...workExperienceData,
                  {
                    id: experienceSections,
                    position: "Position",
                    start: "Start",
                    end: "End",
                    companyName: "Company Name",
                    description:
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem rationeeius, eaque tempore voluptatem, soluta nesciunt voluptatibus, modiarchitecto itaque nobis neque amet impedit voluptates deserunt quibusdamcorrupti.",
                  },
                ]);
              }}
            >
              + Add more work experience
            </button>
          )}
        </form>

        <form action="" className="edit-form__skills">
          <h1 className="form__title">Skills</h1>
          <input
            className="skills__skill-input"
            type="text"
            placeholder="Skill"
          />
          <button className="skills__add-skill-btn">+ Add more skills</button>
        </form>

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
      </div>
      <Preview
        firstName={firstName}
        lastName={lastName}
        professionalTitle={professionalTitle}
        profileContent={profileContent}
        educationData={educationData}
        workExperienceData={workExperienceData}
      />
    </div>
  );
}
