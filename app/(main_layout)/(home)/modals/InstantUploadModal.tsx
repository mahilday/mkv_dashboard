import Modal, { ModalProps } from "@/components/Modal/Modal";
import React from "react";

interface IProps extends Omit<ModalProps, "children"> {}

const InstantUploadModal = ({ isModalOpen, onDismiss, modalId }: IProps) => {
  return (
    <Modal
      headerTitle="Instant Upload"
      modalBoxClassName="!h-fit"
      modalId={modalId}
      isModalOpen={isModalOpen}
      onDismiss={onDismiss}
    >
      <div></div>
    </Modal>
  );
};

export default InstantUploadModal;
