import React from 'react'

const ThemeSwitcher = ({theme, toggleTheme}) => {
  return (
    <div className='form-check form-switch mt-5'>
        <input className="form-check-input" type="checkbox" id="themeSwitch" checked={theme === 'dark'} onChange={toggleTheme}></input>
        <label className='form-check-label' htmlFor='themeSwitch'>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </label>
    </div>
  );
};

export default ThemeSwitcher