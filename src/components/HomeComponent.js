import React, { useEffect, useState } from 'react';
import WelcomeMobile from '../pages/WelcomeMobile';
import Signup from '../pages/Signup';
import Signin from '../pages/Login';

const HomeComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return (
    <div>
      {isMobile ? <WelcomeMobile /> : <Signin />}
    </div>
  );
};

export default HomeComponent;
