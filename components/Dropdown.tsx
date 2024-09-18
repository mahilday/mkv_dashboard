import Link, { LinkProps } from "next/link";
import React, { FC, ReactNode } from "react";

interface IDropdownProps {
  triggerComponent: ReactNode;
  items: { title: string; href?: LinkProps["href"]; onClick(): void }[];
}

const Dropdown: FC<IDropdownProps> = ({ triggerComponent, items }) => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="m-1">
        {triggerComponent}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-light-common-light dark:bg-dark-common-dark rounded-box z-[1] w-52 p-2 shadow"
      >
        {items?.map((item, index) => {
          const customProps = {
            ...(item?.href ? { href: item?.href } : { href: "" }),
          };
          return (
            <li key={index}>
              <Link className="flex items-center" {...customProps}>
                {item?.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
