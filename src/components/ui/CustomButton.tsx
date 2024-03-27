import React from 'react';
import { Button } from '@nextui-org/react';
import confetti from 'canvas-confetti';

const CustomButton = () => {
  const handleConfetti = () => {
    confetti();
  };

  return (
    <Button
      disableRipple
      className='w-full font-semibold text-green-500mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'
      size="sm"
      onPress={handleConfetti}
    >
      <p className='text-sm font-semibold text-gray-700'>
        Your protein with free shipping!
      </p>
    </Button>
  );
};

export default CustomButton;