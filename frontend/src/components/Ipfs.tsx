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
    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Create a new community with IPFS</h5>
    
    {/* Name input */}
    <div className="mb-3">
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name:</label>
      <input type="text" id="name" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
    </div>

    {/* Symbol input with max length of 3 */}
    <div className="mb-3">
      <label htmlFor="symbol" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Symbol:</label>
      <input type="text" id="symbol" pattern="[A-Za-z]{1,3}" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" maxLength={3} />
    </div>

    {/* File input */}
    <div className="mb-3">
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
    </div>
    
    {/* Submit button */}
    <div>
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
