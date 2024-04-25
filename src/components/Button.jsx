import printIcon from "../assets/print.svg";
import "../styles/button.css";
export default function Button() {
  return (
    <button
      className="edit-form__print-btn"
      onClick={() => {
        print();
      }}
    >
      <img className="print-btn__icon" src={printIcon} alt="" />
    </button>
  );
}
