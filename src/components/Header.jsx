import Link from 'next/link';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
      <div className='flex'>
        <MenuItem title='Home' address='/' Icon={AiFillHome} />
        <MenuItem title='About' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
      <div className='flex items-center space-x-5'>
        <DarkModeSwitch />
        <Link href='/' className='text-2xl'>
          <span className='font-bold text-white bg-[#F08] py-1 px-2 rounded-lg'>
            IMDb
          </span>
          <span className='text-xl font-bold text-[#F08] mx-2 hidden sm:inline'>
            wiw
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
