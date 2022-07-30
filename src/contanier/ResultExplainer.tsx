import React from 'react';

import ThemeToggler from '../component/layout/ThemeToggler';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <a href="https://github.com/connectnitesh/OSS-Security-Inspector" className="logo">
        OSS Security Inspector
      </a>
      <ThemeToggler />
    </div>
  );
};

export default Navbar;
