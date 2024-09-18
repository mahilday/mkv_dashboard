import { FC } from "react";
import AlertDialogue, { AlertDialogueProps } from "./AlertDialogue";

export type ModalProps = AlertDialogueProps & {
  isModalOpen?: boolean;
};

const Modal: FC<ModalProps> = ({
  modalBoxClassName = "",
  isModalOpen = true,
  ...props
}) => {
  if (!isModalOpen) return null;

  return (
    <AlertDialogue
      modalBoxClassName={`w-11/12 max-w-2xl h-full 2xl:max-h-[75vh] ${modalBoxClassName}`}
      {...props}
    />
  );
};

export default Modal;
