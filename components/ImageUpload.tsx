"use client";
import { useState, useRef, ReactNode } from "react";
import IconComponent from "./Icons/Icon";
import ProgressBar from "./ProgressBar";
import Label from "./Label";
import Image from "next/image";

const ImageUpload = ({
  label,
  labelClassName,
  required,
}: {
  label?: string;
  labelClassName?: string;
  required: boolean;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("image/")) {
      setFile(droppedFile);
      setPreviewUrl(URL.createObjectURL(droppedFile));
      handleUpload(droppedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      handleUpload(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const clearFile = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  const handleUpload = (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);

    // Mimic upload with timeout
    const uploadInterval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(uploadInterval);
          setIsUploading(false);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 300);
  };
  console.log({ file });

  return (
    <div className="w-full mx-auto">
      <div>
        {label && (
          <Label
            label={label}
            labelClassName={labelClassName}
            required={required}
          />
        )}
      </div>
      <div
        className={`border w-full rounded-[10px] h-[92px] flex flex-col bg-light-common-light items-center justify-center cursor-pointer ${
          isUploading ? "border-gray-400" : "border-light-primary-200"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => inputRef.current?.click()}
      >
        {!file ? (
          <div className="flex flex-col items-center gap-3">
            <div className="text-light-gray-300">
              <IconComponent name="upload" size={24} />
            </div>
            <div className="text-light-gray dark:text-dark-common-light">
              <p>
                Drag & Drop your files or{" "}
                <span
                  className="font-bold"
                  role="button"
                  onClick={() => inputRef.current?.click()}
                >
                  Browse
                </span>
              </p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={inputRef}
              style={{ display: "none" }}
            />
          </div>
        ) : (
          <ProgressContainer removeFile={clearFile}>
            <div className="w-full flex items-center gap-2">
              {previewUrl && (
                <Image
                  src={previewUrl}
                  width={48}
                  height={48}
                  alt="Preview"
                  className="mb-4 rounded-md w-12 h-12 object-cover"
                />
              )}
              {isUploading && <ProgressBar value={uploadProgress} max={100} />}
              {!isUploading && (
                <p className="text-light-gray-700">Upload complete!</p>
              )}
            </div>
          </ProgressContainer>
        )}
      </div>
    </div>
  );
};

const ProgressContainer = ({
  children,
  title,
  size,
  removeFile,
}: {
  children: ReactNode;
  title?: string;
  size?: string;
  removeFile?(): void;
}) => {
  return (
    <div className="w-full flex flex-col gap-1 p-2">
      <div className="w-full relative">
        <p className="flex gap-5">
          {title || "Patient Documents"}
          <span>{size || "180kB"}</span>
        </p>
        <div
          onClick={removeFile}
          className="text-light-common-text absolute top-0 right-0"
        >
          <IconComponent name="close" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default ImageUpload;
