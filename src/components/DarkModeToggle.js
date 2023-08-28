function DarkModeToggle({ darkMode, onDarkModeChange }) {
  return (
    <div>
      <button className="btn-dark-mode" onClick={onDarkModeChange}>
        {darkMode ? "🌝" : "🌚"}
      </button>
    </div>
  );
}

export default DarkModeToggle;
