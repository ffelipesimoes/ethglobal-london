import React from 'react';
// Import DynamicLogin component
import { DynamicWidget } from './../lib/dynamic';


const Menu = () => {
  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-300">
      <div className="text-lg font-bold">Logo</div>
      {/* Replace the existing Button with DynamicLogin */}
      <DynamicWidget /> 

    </div>
  );
};

export default Menu;
