import React, { Dispatch, SetStateAction, FC, useRef, useEffect } from 'react';

import './Toggle.css';

type Props = {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  isDark: boolean;
};

const Toggle: FC<Props> = ({ setDarkMode, isDark }) => {
  const sliderRound = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isDark) {
      sliderRound.current?.classList.remove('light');
      sliderRound.current?.classList.add('dark');
    } else {
      sliderRound.current?.classList.remove('dark');
      sliderRound.current?.classList.add('light');
    }
  }, [isDark]);

  return (
    <label className='switch'>
      <input
        name='theme'
        type='checkbox'
        onClick={() => setDarkMode(!isDark)}
      />
      <span ref={sliderRound} className='slider round dark'></span>
    </label>
  );
};

export default Toggle;
