import * as React from 'react';
import Image from 'next/image';
import { Card } from './ui/card';

type FanToken = {
  id: string;
  name: string;
  description: string;
  members: number;
  image: string;
};

// Modifique o componente para aceitar props
export default function CommunityCard({ name, description, members, image }: FanToken) {
  return (
    <Card className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex justify-center">
          <Image src={image} alt={`${name}`} className="rounded-full" width={64} height={64} />
        </div>
        <h5 className="mt-4 text-xl font-semibold text-center text-gray-900">
          {name}
        </h5>
        <p className="text-gray-700 text-sm mt-2">
          {description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-500 text-xs">
            Token Holders Only
          </p>
          <p className="text-gray-500 text-xs">
            {members.toLocaleString()} members
          </p>
        </div>
      </div>
    </Card>
  );
}
