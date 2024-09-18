import Image, { ImageProps } from "next/image";
import React, { FC } from "react";

interface IAvatarProps extends ImageProps {}

const Avatar: FC<IAvatarProps> = ({ ...props }) => {
  return (
    <div className="avatar py-1">
      <div className="w-full rounded-full">
        <Image {...props} alt="user avatar" />
      </div>
    </div>
  );
};

export default Avatar;
