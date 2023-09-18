import { useState } from 'react';
import Logo from '../images/logo.svg';
import Menu from '../images/menu.svg';

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <nav data-test='nav' className='fixed w-full z-50 bg-white'>
      <div className='relative flex justify-between items-center w-[90%] mx-auto py-6 sm:max-w-[--max-w]'>
        {/* Menu Popup */}
        <div
          data-test='menu'
          className={`${
            menu ? 'visible animate-menu-open' : ' invisible animate-menu-close'
          }  rounded-xl absolute top-20 left-0 w-full py-10 px-8 text-lg font-bold flex flex-col items-center gap-4 bg-[--clr-primary-violet] text-white transition-all md:hidden`}
        >
          <a href='/' className='w-full text-center py-2'>
            Features
          </a>
          <a href='/' className='w-full text-center py-2'>
            Pricing
          </a>
          <a href='/' className='w-full text-center py-2'>
            Resources
          </a>
          <hr className='w-full border-gray-500' />
          <a href='/' className='w-full text-center py-2'>
            Login
          </a>
          <a href='/' className='btn'>
            Sign Up
          </a>
        </div>

        <div className='md:flex md:gap-8 md:items-center [&>a]:text-[--clr-neutral-gray]'>
          <img
            src={Logo.src}
            alt='Logo image'
            width={Logo.width}
            height={Logo.height}
          />
          <a
            data-test='desktop-link'
            href='/'
            className='w-full text-center py-2 hidden md:block hover:text-black transition'
          >
            Features
          </a>
          <a
            data-test='desktop-link'
            href='/'
            className='w-full text-center py-2 hidden md:block hover:text-black transition'
          >
            Pricing
          </a>
          <a
            data-test='desktop-link'
            href='/'
            className='w-full text-center py-2 hidden md:block hover:text-black transition'
          >
            Resources
          </a>
        </div>

        {/* Mobile */}
        <button
          onClick={handleClick}
          data-test='menu-btn'
          className='md:hidden'
        >
          <img src={Menu.src} alt='' width={Menu.width} height={Menu.height} />
        </button>

        {/* Desktop */}
        <div className='md:flex md:gap-8 md:items-center hidden'>
          <a
            data-test='desktop-link'
            href='/'
            className='w-full text-center py-2 text-[--clr-neutral-gray] hover:text-black transition'
          >
            Login
          </a>
          <a
            data-test='desktop-link'
            href='/'
            className='btn text-white md:whitespace-nowrap py-2 px-6'
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
