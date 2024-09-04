import "./TextInput.css";

const TextInput = ({ label, value, onChange, isRequired }) => {
  if (isRequired) {
    return (
      <div className="input-container">
        <label className="input-label">
          {label}
          <span>*</span>
        </label>
        <input
          type="text"
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
          type="text"
          className="input-field"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
};

export default TextInput;
