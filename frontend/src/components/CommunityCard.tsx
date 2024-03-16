// "use client"
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { Card } from './ui/card';

export default function CommunityCard() {
  return (
    <Card className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex justify-center">
          <Image src="/barcelona.png" alt="Barcelona FC" className="rounded-full h-16 w-16" width={40} height={40}/>
        </div>
        <h5 className="mt-4 text-xl font-semibold text-center text-gray-900">
          Barcelona FC
        </h5>
        <p className="text-gray-700 text-sm mt-2">
          A community of Barcelona FC fans around the world. Join us to be a part of a community and engage with other fans.
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-500 text-xs">
            Barcelona FC Token Holders Only
          </p>
          <p className="text-gray-500 text-xs">
            19k members
          </p>
        </div>
      </div>
    </Card>
  );
}
