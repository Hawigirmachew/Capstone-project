function NavigationButtons({ options, handleSelectedSnapshot }) {
  return (
    <div className="navBtn">
      <ul className="navBtn-list">
        {options.map((option) => (
          <li className="navBtn-item" key={option.id}>
            <button onClick={handleSelectedSnapshot} value={option.active}>
              {option.active.charAt(0).toUpperCase() + option.active.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationButtons;
