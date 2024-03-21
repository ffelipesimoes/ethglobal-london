"use client";
import React from "react";
import Wallet from "./Wallet";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link href="/">
        <Image src={"/stadium.jpg"} alt={"icon "} width={150} height={150} />
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/mytokens">
          <div className="text-md text-gray-800 hover:text-blue-600 focus:text-blue-700 focus:outline-none">
            My Tokens
          </div>
        </Link>

        <Wallet />
      </div>
    </nav>
  );
};

export default Menu;
