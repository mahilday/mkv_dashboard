import { FC, ReactNode } from "react";
import Dialogue, { DialogueProps } from "./Dialogue";
import Button, { ButtonProps } from "../Button";

export type AlertDialogueProps = DialogueProps & {
  headerComponent?: ReactNode;
  headerTitle?: string;
  footerComponent?: ReactNode;
  handleCancel?: () => void;
  handleConfirm?: () => void;
  cancelButtonLabel?: string;
  confirmButtonLabel?: string;
  confirmButtonClassName?: string;
  cancelButtonClassName?: string;
  confirmButtonType?: "button" | "submit" | "reset" | undefined;
  confirmLoading?: boolean;
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  modalActionClassName?: string;
};

const AlertDialogue: FC<AlertDialogueProps> = ({
  children,
  handleCancel,
  handleConfirm,
  cancelButtonLabel = "Cancel",
  confirmButtonLabel = "Confirm",
  confirmButtonClassName = "",
  cancelButtonClassName = "",
  confirmButtonType,
  confirmLoading,
  cancelButtonProps,
  confirmButtonProps,
  modalActionClassName = "",
  ...props
}) => {
  const hasHeader = props.headerTitle || props.headerComponent;
  const hasActions = !!handleConfirm || !!handleCancel;

  return (
    <Dialogue {...props}>
      {hasHeader && (
        <div className="modal-header">
          {props.headerTitle && <h2>{props.headerTitle}</h2>}
          {props.headerComponent}
        </div>
      )}

      <div className="modal-body">{children}</div>

      {props.footerComponent && (
        <div className="modal-footer">{props.footerComponent}</div>
      )}

      {hasActions && (
        <div className={`modal-action ${modalActionClassName}`}>
          {handleCancel && (
            <Button
              className={`${cancelButtonClassName}`}
              onClick={handleCancel}
              type="button"
              {...cancelButtonProps}
            >
              {cancelButtonLabel}
            </Button>
          )}
          {handleConfirm && (
            <Button
              className={`${confirmButtonClassName}`}
              loading={confirmLoading}
              onClick={handleConfirm}
              type={confirmButtonType || "button"}
              {...confirmButtonProps}
            >
              {confirmButtonLabel}
            </Button>
          )}
        </div>
      )}
    </Dialogue>
  );
};

export default AlertDialogue;
