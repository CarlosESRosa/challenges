import "./EmailInput.css";

const EmailInput = ({ label, value, onChange, isRequired }) => {
  if (isRequired) {
    return (
      <div className="input-container">
        <label className="input-label">
          {label}
          <span>*</span>
        </label>
        <input
          type="email"
          className="input-field"
          value={value}
          onChange={onChange}
          isRequired={true}
        />
      </div>
    );
  } else {
    return (
      <div className="input-container">
        <label className="input-label">{label}</label>
        <input
          type="email"
          className="input-field"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
};

export default EmailInput;
