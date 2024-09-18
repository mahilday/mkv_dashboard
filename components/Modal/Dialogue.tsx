import { FC, ReactEventHandler, ReactNode } from "react";

export type DialogueProps = {
  modalId: string;
  children: ReactNode;
  closeOnClickOutside?: boolean;
  closeOnClickESC?: boolean;
  showCloseIcon?: boolean;
  modalBoxClassName?: string;
  onDismiss?: () => void;
};

const Dialogue: FC<DialogueProps> = ({
  modalId,
  children,
  closeOnClickOutside = false,
  closeOnClickESC = true,
  showCloseIcon = true,
  modalBoxClassName = "",
  onDismiss,
}) => {
  const onCancel: ReactEventHandler<HTMLDialogElement> = (event) => {
    if (closeOnClickESC) {
      return;
    }
    event.preventDefault();
  };

  return (
    <dialog
      className="modal"
      id={modalId}
      onCancel={onCancel}
      onClose={onDismiss}
    >
      <div
        className={`modal-box flex flex-col items-stretch rounded-xl bg-white ${modalBoxClassName}`}
      >
        {showCloseIcon && (
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              aria-label="Close"
              className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
              type="submit"
            >
              ✕
            </button>
          </form>
        )}
        {children}
      </div>
      {closeOnClickOutside && (
        <form className="modal-backdrop" method="dialog">
          {/* Close the modal on click outside */}
          <button type="submit">close</button>
        </form>
      )}
    </dialog>
  );
};

export default Dialogue;
