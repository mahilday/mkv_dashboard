import { FC } from "react";
import EllipsesLoader, { EllipsesLoaderProps } from "./Ellipses";

export type ComponentLoaderProps = {
  className?: string;
  ellipsesLoaderProps?: EllipsesLoaderProps;
};

const ComponentLoader: FC<ComponentLoaderProps> = ({
  className = "",
  ellipsesLoaderProps,
}) => {
  return (
    <div
      aria-busy="true"
      aria-label="loading"
      className={`flex-1 w-full h-full flex items-center justify-center bg-white-300 ${className}`}
    >
      <EllipsesLoader className="!scale-125" {...ellipsesLoaderProps} />
    </div>
  );
};

export default ComponentLoader;
