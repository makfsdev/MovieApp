'use client';
import { MdLightMode } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentThem = theme === 'system' ? systemTheme : theme;
  return (
    <>
      {currentThem === 'dark' ? (
        <MdLightMode
          onClick={() => setTheme('light')}
          className='text-xl cursor-pointer hover:text-[#F08]'
        />
      ) : (
        <BsFillMoonFill
          className='text-xl cursor-pointer hover:text-[#F08]'
          onClick={() => setTheme('dark')}
        />
      )}
    </>
  );
};

export default DarkModeSwitch;
