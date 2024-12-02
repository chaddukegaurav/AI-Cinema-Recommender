import React from 'react';
import Logo from './Netflix-Logo.wine.svg'
const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black px-8 py-2'>

      <img className='w-44' src={Logo} alt='logo'/>
    </div>
   );
};

export default Header;
