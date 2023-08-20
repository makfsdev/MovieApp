import Link from 'next/link';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';

const Header = () => {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
      <div className='flex'>
        <MenuItem title='Home' address='/' Icon={AiFillHome} />
        <MenuItem title='About' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
      <div className=''>
        <Link href='/'>
          <h2 className='text-2xl'>
            <span className='font-bold bg-blue-500 py-1 px-2 rounded-lg'>
              IMDb
            </span>
            <span className='text-xl mx-2 hidden sm:inline'>App</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
