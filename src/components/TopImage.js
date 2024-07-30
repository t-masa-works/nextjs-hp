import React from "react";
import Image from "next/image";

const TopImage = ({ imageUrl, text }) => {
  return (
    <div className="relative w-full h-96">
      {imageUrl && (
        <Image
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
          alt="Top Image"
          priority
        />
      )}
      <div className="inset-0 absolute flex items-center justify-center">
        <h1 className="text-white text-6xl font-bold text-stroke">{text}</h1>
      </div>
    </div>
  );
};

export default TopImage;
