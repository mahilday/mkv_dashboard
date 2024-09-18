"use client";

import IconComponent from "./Icons/Icon";

type Props = {
  className?: string;
  withTitle?: boolean;
  handleClick?: () => void;
};

const BackButton: React.FC<Props> = ({
  className = "",
  handleClick,
  withTitle = false,
}) => {
  const clickHandler = () => {
    if (handleClick) {
      handleClick();
    } else window.history.back();
  };
  return (
    <div className={`py-2 ${className}`}>
      <button
        onClick={() => clickHandler()}
        className="flex md:border dark:border-none border-light-primary-300 dark:bg-dark-gray text-light-gray-400 generalBg px-4 gap-3 rounded-full items-center"
        type="button"
      >
        <IconComponent name="left-arrow-circle" />
        {withTitle ? <div className="hidden md:flex">Ga terug</div> : ""}
      </button>
    </div>
  );
};

export default BackButton;
