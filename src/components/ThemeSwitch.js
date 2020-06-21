import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const ThemeSwitch = () => {
  const [darkMode, toggleMode] = useDarkMode('DarkMode', false);

  return (
    <div className='theme-switch-wrapper'>
      <strong>Light</strong>
      <label className='theme-switch' htmlFor='checkbox'>
        <input
          type='checkbox'
          id='checkbox'
          onChange={toggleMode}
          checked={darkMode}
        />
        <div className='slider round'></div>
      </label>
      <strong>Dark</strong>
    </div>
  );
};

export default ThemeSwitch;
