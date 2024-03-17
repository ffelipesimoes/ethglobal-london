import React from 'react';
import { Button } from '@/components/ui/button';

// Define a type for the props expected by the FileUpload component
interface FileUploadProps {
  onFileSelected: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelected }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      onFileSelected(file); 
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <Button variant="outline" className="mt-4">Upload</Button>
    </div>
  );
};

export default FileUpload;
