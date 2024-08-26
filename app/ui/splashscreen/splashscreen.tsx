import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed h-screen inset-0 flex items-center justify-center bg-blue z-50">
      <p className='text-white'>Loading...</p>
    </div>
  );
};

export default SplashScreen;
