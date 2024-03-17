// https://nextjs.org/docs/app/building-your-application/rendering/client-components#using-client-components-in-nextjs
"use client";
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FileUpload from './FileUpload.client';

const SearchSection = () => {
  const [isUploading, setIsUploading] = useState(false);

  const handleCreateOwnClick = () => {
    setIsUploading(true);
  };

  const handleFileSelected = async (file: File) => {
    try {
      const response = await fetch('/api/uploadFile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName: file.name }),
      });

      const result = await response.json();
      console.log('Server response:', result);

    } catch (error) {
      console.error('Error uploading file name:', error);
    }

    setIsUploading(false);
  };

  return (
    <div className="flex flex-col items-center my-8">
      <h2 className="text-2xl mb-4">Discover decentralised communities for fans</h2>
      {!isUploading && (
        <>
          <Button variant="outline" className="mb-4" onClick={handleCreateOwnClick}>
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
        </>
      )}
      {isUploading && <FileUpload onFileSelected={handleFileSelected} />}
    </div>
  );
};

export default SearchSection;
