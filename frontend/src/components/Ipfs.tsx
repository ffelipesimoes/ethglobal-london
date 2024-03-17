"use client"
import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

const FileUploadToIPFS = () => {
  // Specify that `file` can be of type File or null
  const [file, setFile] = useState<File | null>(null);
  const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0ZjczZjlhMi0xMjlhLTQ0M2UtYWNjMy01Y2FkM2UwN2M4MTIiLCJlbWFpbCI6InRoZWVsZGFyd2VzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI1MzE3MGY5MjZjYzYyNGIxZGFmZiIsInNjb3BlZEtleVNlY3JldCI6ImY1NWYwMmY2MzJhYzE4OTcwOTRhMTljMDMyZGU2OGI5ZDljMTUzNGQ3OWNlYjExNzA2YjEwMTJjM2EyNDMxNzEiLCJpYXQiOjE3MTA2NDY2MzB9.4ywhaxrOEFz3z7NFE0sHktjB_92EzCi6OHPuqmqd7Mc'; // Ensure you securely manage and use your JWT token

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Check if files exist and set the first file, otherwise set null
    setFile(event.target.files ? event.target.files[0] : null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    // Note: Hard-coding JWT in client-side code is not secure, consider handling file uploads through a server
    try {
      const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        headers: {
          'Authorization': `Bearer ${JWT}`
        }
      });
      console.log('File uploaded:', response.data);
      alert('File successfully uploaded to IPFS!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload the file.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
  <div className="p-6 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Upload to IPFS</h1>
    </div>
    <div className="flex flex-col items-center justify-center space-y-4">
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-violet-50 file:text-violet-700
                   hover:file:bg-violet-100"
      />
      <button 
        type="submit" 
        className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
        Upload
      </button>
    </div>
  </div>
</form>


  );
};

export default FileUploadToIPFS;
