import "../styles/form.css";

function PersonalInformation() {
  return (
    <form action="" className="edit-form__personal-information">
      <h1 className="form__title">Personal Information</h1>
      <input
        className="personal-information__first-name"
        type="text"
        placeholder="First Name"
      />
      <input
        className="personal-information__last-name"
        type="text"
        placeholder="Last Name"
      />
      <input
        className="personal-information__professional-title"
        type="text"
        placeholder="Professional Title"
      />
    </form>
  );
}

export default function Form() {
  return (
    <div className="edit-form">
      <PersonalInformation />
    </div>
  );
}
