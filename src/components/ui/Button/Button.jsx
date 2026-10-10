import "./Button.css";

function Button({ children, variant , onClick, type = "button" }) {
  return (
    <button
      type={type}
      className={`custom-button ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}



export function BackButton({ onClick, label = "Back" }) {
  return (
    <button onClick={onClick} className="backBtn">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="15 18 9 12 15 6" />
      </svg>
      {label}
    </button>
  );
}

export default Button;