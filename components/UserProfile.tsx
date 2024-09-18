import useAuthUser from "@/hooks/useAuthUser";
import React from "react";
import Avatar from "./Avatar";
import IconComponent from "./Icons/Icon";
import Dropdown from "./Dropdown";

const UserProfile = () => {
  const { userAvatar, firstName } = useAuthUser();
  return (
    <Dropdown
      triggerComponent={
        <div className="flex items-center rounded-full h-46 p-1 gap-2 generalBg">
          <Avatar src={userAvatar} width={40} height={40} alt="user avatar" />
          <div className="hidden md:flex items-center">
            <h6 className="truncate text-nowrap">Hi {firstName}</h6>
            <IconComponent name="dropdown" size={14} />
          </div>
        </div>
      }
      items={[{ title: "Logout", onClick: () => {} }]}
    />
  );
};

export default UserProfile;
