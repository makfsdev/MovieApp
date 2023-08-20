import Link from 'next/link';

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div>
      <Link
        href={address}
        className='text-2xl mx-4 lg:mx-6 hover:text-blue-600'
      >
        <Icon className='sm:hidden mx-4' />
        <div className='hidden sm:inline my-2'> {title}</div>
      </Link>
    </div>
  );
};

export default MenuItem;
