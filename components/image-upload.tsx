"use client";

import { useEffect, useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

interface ImageUploadProps {
  value: string;
  onChange: (src: string) => void;
  disabled?: boolean;
}

function ImageUpload({ value, onChange, disabled }: ImageUploadProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) {
    return null;
  }

  return (
    <div className="space-y-4 w-full flex flex-col justify-center items-center">
      <CldUploadButton
        options={{
          maxFiles: 1,
        }}
        uploadPreset="f3gu8kee"
      >
        <div className="p-4 border-4 border-dashed border-primary/10 rounded-lg hover:opacity-75 transition flex flex-col space-y-2 items-center justify-center">
          <div className="relative h-40 w-40">
            <Image
              fill
              alt="upload"
              src="/placeholder.svg"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </CldUploadButton>
    </div>
  );
}

export default ImageUpload;

// the useEffect hook was used to prevent any Hydration error that is most likely going to occur.
// thanks to the hook, the page is automatically changed from server side to client side when the server side is done rendering. else it will keep being null.
// further explanation: page is null when still with the server and becomes true when page reaches the client side.
