import React, { useState, useEffect } from 'react';

const ThemeSwitch = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const themeSwitch = document.getElementById('checkbox');
    localStorage.getItem('Theme') === 'dark'
      ? (themeSwitch.checked = true)
      : (themeSwitch.checked = false);

    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem('Theme')
    );
  }, []);

  const toggleTheme = e => {
    const theme = e.target.checked ? 'dark' : 'light';
    setTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('Theme', theme);
  };

  return (
    <div className='theme-switch-wrapper'>
      <strong>Light</strong>
      <label className='theme-switch' htmlFor='checkbox'>
        <input type='checkbox' id='checkbox' onChange={toggleTheme} />
        <div className='slider round'></div>
      </label>
      <strong>Dark</strong>
    </div>
  );
};

export default ThemeSwitch;
