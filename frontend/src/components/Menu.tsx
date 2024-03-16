import React from 'react';
import { Button } from '@/components/ui/button';

const Menu = () => {
  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-300">
      <div className="text-lg font-bold">Logo</div>
      <Button variant="outline" color="primary">Login</Button>
    </div>
  );
};

export default Menu;
