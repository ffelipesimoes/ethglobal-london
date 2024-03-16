"use client"
import React from 'react';
import { DynamicWidget, useDynamicContext } from './../lib/dynamic';
import Wallet from './Wallet';


const Menu = () => {

  const { primaryWallet } = useDynamicContext();
  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-300">
      <div className="text-lg font-bold">Logo</div>
      <Wallet />

    </div>
  );
};

export default Menu;
