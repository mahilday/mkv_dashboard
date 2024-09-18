import { FC } from "react";
import "./ellipses.css";

export type EllipsesLoaderProps = {
  className?: string;
  contentContainerStyle?: string;
};

const EllipsesLoader: FC<EllipsesLoaderProps> = ({
  className = "",
  contentContainerStyle = "",
}) => {
  return (
    <div aria-label="Loading" className={`lds-ellipsis scale-75 ${className}`}>
      <div
        className={`bg-light-purple dark:bg-dark-common-light ${contentContainerStyle}`}
      />
      <div
        className={`bg-light-purple dark:bg-dark-common-light ${contentContainerStyle}`}
      />
      <div
        className={`bg-light-purple dark:bg-dark-common-light ${contentContainerStyle}`}
      />
      <div
        className={`bg-light-purple dark:bg-dark-common-light ${contentContainerStyle}`}
      />
    </div>
  );
};

export default EllipsesLoader;
