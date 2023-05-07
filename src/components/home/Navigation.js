function Navigation({ options, handleSelectedSnapshot }) {
  return (
    <nav className="navBar">
      <ul className="navList">
        {options.map((option) => (
          <li className="navItems" key={option.id}>
            <button onClick={handleSelectedSnapshot} value={option.active}>
              {option.active.charAt(0).toUpperCase() + option.active.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
