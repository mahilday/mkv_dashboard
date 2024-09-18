import IconComponent from "./Icons/Icon";

const ChatPopUp = () => {
  return (
    <div className="fixed bottom-10 right-5 lg:right-10 z-[1000]">
      <div className="relative">
        <button
          className={`w-[67px] shadow-custom-shadow bg-light-primary-200 border border-light-primary h-[67px] rounded-full grid place-items-center`}
        >
          <IconComponent name="chat" size={30} />
        </button>
      </div>
    </div>
  );
};

export default ChatPopUp;
