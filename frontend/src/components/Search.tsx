import React from 'react';
import  { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SearchSection = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <h2 className="text-2xl mb-4">Discover decentralised communities for fans</h2>
      <Button variant="outline" className="mb-4">
        Or create your own
      </Button>
      <div className="flex w-full max-w-md mb-4">
        <Input placeholder="Search" className="w-full" />
      </div>
      <div className="flex gap-4">
        <Button>Barcelona</Button>
        <Button>Juventus</Button>
        <Button>Manchester United</Button>
        <Button>Manchester City</Button>
      </div>
    </div>
  );
};

export default SearchSection;
