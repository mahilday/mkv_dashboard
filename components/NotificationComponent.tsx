import React from "react";
import IconComponent from "./Icons/Icon";

const NotificationComponent = () => {
  return (
    <div className="h-12 w-12 rounded-full flex items-center justify-center generalBg">
      <IconComponent name="notification-2" size={22} />
    </div>
  );
};

export default NotificationComponent;
